import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class RectangleShape extends Shape {
  constructor() {
    super(17, 10, 0, [
      penDown(),
      forward(8),
      right(90),
      forward(16),
      right(90),
      forward(8),
      right(90),
      forward(16)
    ]);
  }
}
