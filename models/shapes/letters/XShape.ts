import {Shape} from "~/models/Shape";
import {forward, penDown, left, right, penUp} from "~/helpers/StepFactories";

export class XShape extends Shape {
  constructor() {
    super(15, 30, 90,  [
      penDown(),
      right(30),
      forward(24),
      left(120),
      penUp(),
      forward(12),
      penDown(),
      left(120),
      forward(24)
    ]);
  }
}
