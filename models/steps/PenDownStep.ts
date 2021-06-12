import {PenStep, Pen} from "~/models/steps/PenStep";
import {Renderer} from "../Renderer";

export class PenDownStep extends Pen {
  constructor(){
    super(PenStep.DOWN);
  }

  render(renderer: Renderer): void {
    renderer.penDown();
  }
}
