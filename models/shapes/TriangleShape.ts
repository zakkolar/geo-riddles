import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class TriangleShape extends Shape {
  constructor() {
    super(13, 25, 0, [
      penDown(),
      forward(16),
      right(240),
      forward(16),
      right(240),
      forward(16)
    ]);
  }
}
