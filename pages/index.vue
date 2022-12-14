<template>
  <div>
    <h1 class="title tc">GeoRiddle Generator</h1>

    <div class="mw9 center dt">

      <div class="w-25-l w-100 pa2 dtc-l">
        <h2 class="subtitle">Shape</h2>
        <select v-model="currentShapeKey">
          <optgroup v-for="category of shapeCategories" :label="category">
            <option v-for="shape of shapes.filter(item => item.category === category)" :value="shape.label">
              {{shape.label}} ({{shape.shape.numSteps()}} steps)
            </option>
          </optgroup>
        </select>
        <h3 class="mt3">Shape Sources</h3>
        <ul class="mt3 list ml0 pl0">
          <li class="mt2" v-for="source in shapeSources">
            {{source.name}}
            <ul class="list pl4">
              <li v-for="link in source.links" class="mt1">
                <a :href="link.url" target="_blank">{{link.text}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="w-25-l w-100 pa2 dtc-l">
        <h2 class="subtitle">Transformations</h2>
        <div v-for="item of transformations" class="flex items-center mb2">
        <label class="lh-copy" >
          <input class="mr2" type="checkbox"  :value="item.label" v-model="chosenTransformationKeys">
          {{item.label}}
        </label>
        </div>
      </div>



      <div class=" w-100 pa2 w-25-l dtc-l">

        <h2 class="subtitle">Preview</h2>
        <canvas class="center tc" id="preview" width="200" height="200" style="border-style:solid; border-width:1px;">

        </canvas>
      </div>




      <div class="w-25-l w-100 center pa2 dtc-l" v-if="currentSteps.length">
        <h2 class="subtitle">Clues</h2>
        <ol>
          <li v-for="step of currentSteps" v-html="step"></li>
        </ol>

        <button v-if="showRegenerate" @click.prevent = "generateSteps">Regenerate</button>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue'
import {SHAPES} from "~/models/Shapes";
import {Renderer} from "~/models/Renderer";
import {NO_TRANSFORMATION, TRANSFORMATIONS} from "~/models/Transformations";

export default Vue.extend({
  data() : {
    renderer: Renderer | null,
    shapes: typeof SHAPES,
    transformations: typeof TRANSFORMATIONS,
    chosenTransformationKeys: String[],
    currentSteps: String[],
    currentShapeKey: string | null,
    shapeSources: []
  } {
    return {
      shapes: SHAPES,
      transformations: TRANSFORMATIONS,
      chosenTransformationKeys: [],
      renderer: null,
      currentSteps: [],
      currentShapeKey: null,
      shapeSources: [
        {
          name: 'iRobot',
          links: [
            {
              url: 'https://edu.irobot.com/learning-library/ice-skate-shapes',
              text: 'Root - Ice Skate Shapes'
            },
            {
              url: 'https://shop.edu.irobot.com/blogs/stories/root-alphabet-guide',
              text: 'Root Alphabet Guide'
            }
          ]

        },
        {
          name: 'Heidi MacGregor',
          links: [
            {
              url: 'https://docs.google.com/presentation/d/1hB0rm63zTsxP8HFe8TcEdT6IbGJEcKLZkratZtRoCE4/edit#slide=id.gad514305c7_0_24',
              text: 'GeoRiddles 1'
            },
            {
              url: 'https://docs.google.com/presentation/d/1cwEnqvj2BHCvo3T0IDmbqe1Y_QgQY2ZckWH7aihynxg/edit#slide=id.gad9e89dbdd_0_56',
              text: 'More GeoRiddles'
            },
            {
              url: 'https://docs.google.com/presentation/d/1iLwJAtFU2XUDUFym61fDVqK3m-sYiN_loPqj10ik4F4/edit#slide=id.ga57901608d_0_5',
              text: 'Level 2 GeoRiddles'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    const c = document.getElementById('preview');
    // @ts-ignore
    this.renderer = new Renderer(c, {scale: 5});
    this.resetCanvas();

  },

  computed: {
    currentTransformations(){
      if(this.chosenTransformationKeys.length === 0){
        return [NO_TRANSFORMATION];
      }
      else{
        // @ts-ignore
        return this.transformations
          // @ts-ignore
          .filter(item => this.chosenTransformationKeys.indexOf(item.label) > -1)
          // @ts-ignore
          .map(item => item.transformation);
      }
    },

    currentShape(){
      // @ts-ignore
      const shape = this.shapes.find(shape => shape.label == this.currentShapeKey);
      if(shape){
        return shape.shape;
      }
      return null;
    },

    showRegenerate(){
      // @ts-ignore
      return this.currentTransformations.length > 1 || this.currentTransformations[0] !== NO_TRANSFORMATION;
    },

    shapeCategories(){
      // @ts-ignore
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
      // @ts-ignore
      this.renderer.penUp();
      // @ts-ignore
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
