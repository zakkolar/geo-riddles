import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class IShape extends Shape {
  constructor() {
    super(15, 30, 0);
    this._steps = [
      penDown(),
      move(16),
      left(180),
      move(8),
      right(90),
      move(20),
      right(90),
      move(8),
      right(180),
      move(16)
    ]
  }
}
