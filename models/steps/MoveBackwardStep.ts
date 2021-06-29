import {MOVE_DIRECTION, MoveStep} from "~/models/steps/MoveStep";
import {Renderer} from "~/models/Renderer";

/**
 * A Step in which the pen moves backwards.
 */
export class MoveBackwardStep extends MoveStep {
  /**
   * Creates a new MoveBackwardStep
   * @param distance The distance the pen should move backwards. A negative distance causes forward motion.
   */
  constructor(distance: number) {
    super(MOVE_DIRECTION.BACKWARD, distance);
  }

  render(renderer: Renderer): void {
    renderer.backward(this.distance);
  }

}
