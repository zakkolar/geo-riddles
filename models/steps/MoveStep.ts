import {Step, STEP_TYPES} from "~/models/Step";
import {Renderer} from "../Renderer";
import {Transformation} from "~/models/Transformation";

export class MoveStep extends Step {

  private readonly _distance:number;

  constructor(distance: number) {
      super(STEP_TYPES.MOVE);
      this._distance = distance;
  }

  get distance(){
    return this._distance;
  }

  generateText(transformation: Transformation): String {
    return `Move by ${transformation.transform(this.distance)}`;
  }

  render(renderer: Renderer): void {
    renderer.move(this.distance);
  }

}
