import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class KShape extends Shape {
  constructor() {
    super(15, 30, 90);
    this._steps = [
      penDown(),
      move(20),
      right(180),
      move(8),
      left(135),
      move(11),
      right(180),
      move(11),
      left(80),
      move(15)
    ]
  }
}
