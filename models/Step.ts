/**
 * List of defined step types
 */
import {Renderer} from "./Renderer";
import {Transformation} from "~/models/Transformation";

export enum STEP_TYPES {
  ROTATE = 'ROTATE',
  PEN = 'PEN',
  MOVE = 'MOVE'
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

  /**
   * Represents the Step as a human-readable instruction
   * @return {String} Human-readable instruction
   */
  abstract generateText(transformation: Transformation): String;

  abstract render(renderer: Renderer): void;

}

