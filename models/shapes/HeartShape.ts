import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class HeartShape extends Shape {
  constructor() {
    super(9, 3, 0, [
      penDown(),
      forward(8),
      right(60),
      forward(8),
      left(120),
      forward(8),
      right(60),
      forward(8),
      right(60),
      forward(8),
      right(60),
      forward(32),
      right(120),
      forward(32),
      right(60),
      forward(8)
    ]);
  }
}
