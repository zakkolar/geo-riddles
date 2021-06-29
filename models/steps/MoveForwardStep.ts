import {MOVE_DIRECTION, MoveStep} from "~/models/steps/MoveStep";
import {Renderer} from "~/models/Renderer";

/**
 * A Step in which the pen moves forwards.
 */
export class MoveForwardStep extends MoveStep {

  /**
   * Creates a new MoveForwardStep
   * @param distance The distance the pen should move forwards. A negative distance causes backward motion.
   */
  constructor(distance: number) {
    super(MOVE_DIRECTION.FORWARD, distance);
  }

  render(renderer: Renderer): void {
    renderer.forward(this.distance);
  }

}
