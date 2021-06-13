import {Step, STEP_TYPES} from "~/models/Step";
import {Transformation} from "~/models/Transformation";

export enum PenStep {
  UP = 'up',
  DOWN = 'down'
}

export abstract class Pen extends Step {

  private readonly _direction;

  protected constructor(direction: PenStep) {
    super(STEP_TYPES.PEN);
    this._direction = direction;
  }

  get direction(){
    return this._direction;
  }

  transformText(transform: Transformation): String {
    return `Marker ${this.direction}`
  }

}
