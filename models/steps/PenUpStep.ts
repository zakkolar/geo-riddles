import {PEN_DIRECTION, PenStep} from "~/models/steps/PenStep";
import {Renderer} from "../Renderer";

export class PenUpStep extends PenStep {
  constructor(){
    super(PEN_DIRECTION.UP);
  }

  render(renderer: Renderer): void {
    renderer.penUp();
  }
}
