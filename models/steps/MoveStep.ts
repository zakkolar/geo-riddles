import {Step, STEP_TYPES} from "~/models/Step";
import {Renderer} from "../Renderer";
import {Transformation} from "~/models/Transformation";

export enum MOVE_DIRECTION {
  FORWARD = 'forward',
  BACKWARD = 'backward'
}

export abstract class MoveStep extends Step {

  private readonly _distance:number;
  private readonly _direction: MOVE_DIRECTION;

  protected constructor(direction: MOVE_DIRECTION, distance: number) {
      super(STEP_TYPES.MOVE);
      this._direction = direction;
      this._distance = distance;
  }

  get distance(){
    return this._distance;
  }

  get direction(){
    return this._direction;
  }

  transformText(transformation: Transformation): String {
    return `Move ${this.direction} by ${transformation.transform(this.distance)}`;
  }



}
