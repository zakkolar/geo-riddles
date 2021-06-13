import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class BShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      move(20),
      right(90),
      move(8),
      right(90),
      move(8),
      right(45),
      move(4),
      right(45),
      move(4),
      right(180),
      move(8),
      right(90),
      move(8),
      right(90),
      move(8)

    ]);
  }
}
