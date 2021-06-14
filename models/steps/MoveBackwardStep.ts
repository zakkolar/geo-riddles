import {MOVE_DIRECTION, MoveStep} from "~/models/steps/MoveStep";
import {Renderer} from "~/models/Renderer";

export class MoveBackwardStep extends MoveStep {

  constructor(distance: number) {
    super(MOVE_DIRECTION.BACKWARD, distance);
  }

  render(renderer: Renderer): void {
    renderer.backward(this.distance);
  }

}
