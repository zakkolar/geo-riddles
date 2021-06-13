import {Shape} from "~/models/Shape";
import {move, penDown, left, right, penUp} from "~/helpers/StepFactories";

export class GShape extends Shape {
  constructor() {
    super(27, 10, 180, [
      penDown(),
      move(12),
      left(90),
      move(20),
      left(90),
      move(12),
      left(90),
      move(8),
      left(90),
      move(6),

    ]);
  }
}
