import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class OShape extends Shape {
  constructor() {
    super(15, 30, 90);
    this._steps = [
      penDown(),
      move(20),
      right(90),
      move(12),
      right(90),
      move(20),
      right(90),
      move(12),
    ]
  }
}
