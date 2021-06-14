import {MOVE_DIRECTION, MoveStep} from "~/models/steps/MoveStep";
import {Renderer} from "~/models/Renderer";

export class MoveForwardStep extends MoveStep {

  constructor(distance: number) {
    super(MOVE_DIRECTION.FORWARD, distance);
  }

  render(renderer: Renderer): void {
    renderer.forward(this.distance);
  }

}
