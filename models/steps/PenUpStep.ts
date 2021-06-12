import {PenStep, Pen} from "~/models/steps/PenStep";
import {Renderer} from "../Renderer";

export class PenUpStep extends Pen {
  constructor(){
    super(PenStep.UP);
  }

  render(renderer: Renderer): void {
    renderer.penUp();
  }
}
