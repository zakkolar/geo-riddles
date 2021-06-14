import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class ZShape extends Shape {
  constructor() {
    super(15, 10, 0, [
      penDown(),
      forward(12),
      right(125),
      forward(24),
      left(125),
      forward(12)
    ]);
  }
}
