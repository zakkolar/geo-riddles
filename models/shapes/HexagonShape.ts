import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class HexagonShape extends Shape {
  constructor() {
    super(15, 10, 0);
    this._steps = [
      penDown(),
      move(10),
      right(60),
      move(10),
      right(60),
      move(10),
      right(60),
      move(10),
      right(60),
      move(10),
      right(60),
      move(10)
    ]
  }
}
