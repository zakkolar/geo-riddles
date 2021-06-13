import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class HeartShape extends Shape {
  constructor() {
    super(9, 3, 0);
    this._steps = [
      penDown(),
      move(8),
      right(60),
      move(8),
      left(120),
      move(8),
      right(60),
      move(8),
      right(60),
      move(8),
      right(60),
      move(32),
      right(120),
      move(32),
      right(60),
      move(8)
    ]
  }
}
