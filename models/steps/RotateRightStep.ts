import {RotateStep, ROTATION} from "~/models/steps/RotateStep";
import {Renderer} from "../Renderer";

export class RotateRightStep extends RotateStep {
  constructor(angle: number) {
    super(ROTATION.RIGHT, angle);
  }

  render(renderer: Renderer): void {
    renderer.rotateRight(this.angle);
  }
}
