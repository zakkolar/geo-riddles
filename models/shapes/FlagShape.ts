import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class FlagShape extends Shape {
  constructor() {
    super(10, 30, 90);
    this._steps = [
      penDown(),
      move (22),
      right(100),
      move(27),
      right(152),
      move(28)
    ]
  }
}
