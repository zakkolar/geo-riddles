import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class AShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      forward(16),
      right(45),
      forward(8),
      right(90),
      forward(8),
      right(45),
      forward(16),
      right(180),
      forward(8),
      left(90),
      forward(12)
    ]);
  }
}
