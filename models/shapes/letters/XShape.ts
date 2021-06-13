import {Shape} from "~/models/Shape";
import {move, penDown, left, right, penUp} from "~/helpers/StepFactories";

export class XShape extends Shape {
  constructor() {
    super(15, 30, 90,  [
      penDown(),
      right(30),
      move(24),
      left(120),
      penUp(),
      move(12),
      penDown(),
      left(120),
      move(24)
    ]);
  }
}
