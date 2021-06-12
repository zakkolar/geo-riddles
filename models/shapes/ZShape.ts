import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class ZShape extends Shape {
  constructor() {
    super(15, 10, 0);
    this._steps = [
      penDown(),
      move(12),
      right(125),
      move(24),
      left(125),
      move(12)
    ]
  }
}
