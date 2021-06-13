import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class SquareShape extends Shape {
  constructor() {
    super(10, 10, 0, [
      penDown(),
      move(16),
      right(90),
      move(16),
      right(90),
      move(16),
      right(90),
      move(16)
    ]);
  }
}
