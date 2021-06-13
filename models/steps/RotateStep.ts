import {Step, STEP_TYPES} from "~/models/Step";
import {Transformation} from "~/models/Transformation";

export enum ROTATION {
  LEFT = 'left',
  RIGHT = 'right'
}

export abstract class RotateStep extends Step {

  private readonly _direction: ROTATION;
  private readonly _angle: number;

  protected constructor(direction: ROTATION, angle: number){
    super(STEP_TYPES.ROTATE);
    this._direction = direction;
    this._angle = angle;
  }

  get direction(){
    return this._direction;
  }

  get angle(){
    return this._angle;
  }

  transformText(transformation: Transformation): String {
    return `Turn ${this.direction} by ${transformation.transform(this.angle)}`;
  }

}
