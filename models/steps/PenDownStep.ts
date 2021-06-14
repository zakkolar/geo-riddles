import {PEN_DIRECTION, PenStep} from "~/models/steps/PenStep";
import {Renderer} from "../Renderer";

export class PenDownStep extends PenStep {
  constructor(){
    super(PEN_DIRECTION.DOWN);
  }

  render(renderer: Renderer): void {
    renderer.penDown();
  }
}
