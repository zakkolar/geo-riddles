import {Shape} from "~/models/Shape";
import {move, penDown, left, right, penUp} from "~/helpers/StepFactories";

export class RShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      move(20),
      right(90),
      move(12),
      right(90),
      move(10),
      right(90),
      move(12),
      left(140),
      move(15)
    ]);
  }
}
