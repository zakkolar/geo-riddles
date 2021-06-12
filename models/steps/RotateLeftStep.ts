import {RotateStep, ROTATION} from "~/models/steps/RotateStep";
import {Renderer} from "../Renderer";

export class RotateLeftStep extends RotateStep {
  constructor(angle: number) {
    super(ROTATION.LEFT, angle);
  }

  render(renderer: Renderer): void {
    renderer.rotateLeft(this.angle);
  }
}
