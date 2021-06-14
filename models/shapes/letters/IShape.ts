import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class IShape extends Shape {
  constructor() {
    super(15, 30, 0, [
      penDown(),
      forward(16),
      left(180),
      forward(8),
      right(90),
      forward(20),
      right(90),
      forward(8),
      right(180),
      forward(16)
    ]);
  }
}
