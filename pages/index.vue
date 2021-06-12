<template>
  <div>
    <h1 class="title tc">GeoRiddle Generator</h1>

    <div class="mw9 center">

      <div class="w-33-l w-100 pa2 fl">
        <h2 class="subtitle">Shape</h2>
        <select v-model="currentShapeKey">
          <optgroup v-for="category of shapeCategories" :label="category">
            <option v-for="shape of shapes.filter(item => item.category === category)" :value="shape.label">
              {{shape.label}} ({{shape.shape.steps.length}} steps)
            </option>
          </optgroup>
        </select>
      </div>

      <div class="w-33-l w-100 pa2 fl">
        <h2 class="subtitle">Transformations</h2>
        <div v-for="item of transformations" class="flex items-center mb2">
        <label class="lh-copy" >
          <input class="mr2" type="checkbox"  :value="item.label" v-model="chosenTransformationKeys">
          {{item.label}}
        </label>
        </div>
      </div>



      <div class="fl w-100 pa2 w-33-l">

        <h2 class="subtitle">Preview</h2>
        <canvas id="preview" width="200" height="200" style="border-style:solid; border-width:1px;">

        </canvas>
      </div>




      <div class="w-50-l w-100 center pa2" v-if="currentSteps.length">
        <h2 class="subtitle">Clues</h2>
        <ol>
          <li v-for="step of currentSteps">
            {{step}}
          </li>
        </ol>

        <button v-if="showRegenerate" @click.prevent = "generateSteps">Regenerate</button>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {SHAPES} from "~/models/Shapes";
import {Renderer} from "~/models/Renderer";
import {Shape} from "~/models/Shape";
import {NO_TRANSFORMATION, TRANSFORMATIONS} from "~/models/Transformations";
import {Transformation} from "~/models/Transformation";

export default Vue.extend({
  data() : {
    renderer: Renderer,
    shapes: typeof SHAPES,
    transformations: typeof TRANSFORMATIONS,
    chosenTransformationKeys: String[],
    currentSteps: String[],
    currentShapeKey: string,
  } {
    return {
      shapes: SHAPES,
      transformations: TRANSFORMATIONS,
      chosenTransformationKeys: [],
      renderer: null,
      currentSteps: [],
      currentShapeKey: null
    }
  },
  mounted() {
    const c = document.getElementById('preview');
    this.renderer = new Renderer(c, {scale: 5});
    this.resetCanvas();

  },

  computed: {
    currentTransformations(){
      if(this.chosenTransformationKeys.length === 0){
        return [NO_TRANSFORMATION];
      }
      else{
        return this.transformations
          .filter(item => this.chosenTransformationKeys.indexOf(item.label) > -1)
          .map(item => item.transformation);
      }
    },

    currentShape(){
      const shape = this.shapes.find(shape => shape.label == this.currentShapeKey);
      if(shape){
        return shape.shape;
      }
      return null;
    },

    showRegenerate(){
      return this.currentTransformations.length > 1 || this.currentTransformations[0] !== NO_TRANSFORMATION;
    },

    shapeCategories(){
      return this.shapes.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    }
  },
  watch: {
    currentShape(oldShape, newShape){
      this.generateSteps();
      this.renderPreview();
    },
    currentTransformations(oldTransformation, newTransformation){
      this.generateSteps();
    }
  },
  methods: {
    generateSteps(){
      if(this.currentShape && this.currentTransformations.length > 0){
        this.currentSteps = this.currentShape.generateStepList(this.currentTransformations);
      }
      else {
        this.currentSteps = [];
      }
    },
    resetCanvas(){
      this.renderer.penUp();
      this.renderer.clear();
    },
    renderPreview(){
      this.resetCanvas();
      if(this.currentShape){
        this.renderer.goTo(this.currentShape.startX, this.currentShape.startY);
        this.renderer.rotateTo(0);
        this.renderer.rotateLeft(this.currentShape.startAngle);
        this.currentShape.render(this.renderer);
      }
    }
  }
})
</script>

<style>

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align:center;
}

.links {
  padding-top: 15px;
}
</style>
