import {Step, STEP_TYPES} from "~/models/Step";
import {Transformation} from "~/models/Transformation";

export enum PEN_DIRECTION {
  UP = 'up',
  DOWN = 'down'
}

export abstract class PenStep extends Step {

  private readonly _direction;

  protected constructor(direction: PEN_DIRECTION) {
    super(STEP_TYPES.PEN);
    this._direction = direction;
  }

  get direction(){
    return this._direction;
  }

  transformText(transform: Transformation): String {
    return `Marker <b>${this.direction}</b>`
  }

}
