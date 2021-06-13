import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class AShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      move(16),
      right(45),
      move(8),
      right(90),
      move(8),
      right(45),
      move(16),
      right(180),
      move(8),
      left(90),
      move(12)
    ]);
  }
}
