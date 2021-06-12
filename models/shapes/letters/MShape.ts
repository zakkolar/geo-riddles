import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class MShape extends Shape {
  constructor() {
    super(15, 30, 90);
    this._steps = [
      penDown(),
      move(20),
      right(135),
      move(8),
      left(90),
      move(8),
      right(135),
      move(20)
    ]
  }
}
