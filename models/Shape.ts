import {Step} from "~/models/Step";
import {Renderer} from "./Renderer";
import {Transformation} from "~/models/Transformation";

export abstract class Shape {
  _steps: Step[];

  private readonly _startX: number;
  private readonly _startY: number;
  private readonly _startAngle: number;

  protected constructor(startX: number, startY: number, startAngle: number){
    this._startX = startX;
    this._startY = startY;
    this._startAngle = startAngle;

    this._steps = [];
  }

  get steps(){
    return this._steps;
  }

  get startX(): number{
    return this._startX;
  }

  get startY(): number{
    return this._startY;
  }

  get startAngle(): number {
    return this._startAngle;
  }

  generateStepList(transformation: Transformation | Transformation[]): String[] {
    const steps = [];
    for(let step of this.steps){

      let thisTransformation = transformation;

      if(Array.isArray(thisTransformation)){
        // @ts-ignore
        thisTransformation = transformation[Math.floor(Math.random() * 1000) % thisTransformation.length]
      }

      // @ts-ignore
      steps.push(step.generateText(thisTransformation));
    }
    return steps;
  }

  render(renderer: Renderer): void {
    for(let step of this.steps) {
      step.render(renderer);
    }
  }

}
