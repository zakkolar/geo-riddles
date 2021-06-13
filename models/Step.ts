/**
 * List of defined step types
 */
import {Renderer} from "./Renderer";
import {Transformation} from "~/models/Transformation";

export enum STEP_TYPES {
  ROTATE = 'ROTATE',
  PEN = 'PEN',
  MOVE = 'MOVE',
  REPEAT = 'REPEAT'
};

/**
 * One discrete movement used to render a Shape
 */
export abstract class Step {
  private readonly _type: STEP_TYPES;

  constructor(type:STEP_TYPES){
    this._type = type;
  }

/**
 * Returns the type of the Step
 * @return {STEP_TYPES} Type of the Step
 */
  get type(){
    return this._type;
  }

  static chooseTransformation(transformation: Transformation | Transformation[]): Transformation {
    let thisTransformation = transformation;

    if(Array.isArray(thisTransformation)){
      // @ts-ignore
      thisTransformation = transformation[Math.floor(Math.random() * 1000) % thisTransformation.length]
    }

    // @ts-ignore
    return thisTransformation;
  }

  generateText(transformation: Transformation | Transformation[]): String {
   const thisTransformation = Step.chooseTransformation(transformation);
    return this.transformText(thisTransformation);
  }

  abstract transformText(transformation: Transformation): String;

  abstract render(renderer: Renderer): void;

}

