import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class SShape extends Shape {
  constructor() {
    super(15, 30, 0, [
      penDown(),
      move(10),
      left(90),
      move(10),
      left(90),
      move(10),
      right(90),
      move(10),
      right(90),
      move(10)
    ]);
  }
}
