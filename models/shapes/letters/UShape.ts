import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class UShape extends Shape {
  constructor() {
    super(15, 10, 270);
    this._steps = [
      penDown(),
      move(20),
      left(90),
      move(12),
      left(90),
      move(20)
    ]
  }
}
