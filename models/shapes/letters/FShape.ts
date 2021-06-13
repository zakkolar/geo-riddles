import {Shape} from "~/models/Shape";
import {move, penDown, left, right, penUp} from "~/helpers/StepFactories";

export class FShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      move(20),
      right(90),
      move(8),
      right(90),
      penUp(),
      move(10),
      penDown(),
      right(90),
      move(8)

    ]);
  }
}
