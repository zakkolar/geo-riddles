import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class RectangleShape extends Shape {
  constructor() {
    super(17, 10, 0, [
      penDown(),
      move(8),
      right(90),
      move(16),
      right(90),
      move(8),
      right(90),
      move(16)
    ]);
  }
}
