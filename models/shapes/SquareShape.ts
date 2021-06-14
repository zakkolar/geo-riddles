import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class SquareShape extends Shape {
  constructor() {
    super(10, 10, 0, [
      penDown(),
      forward(16),
      right(90),
      forward(16),
      right(90),
      forward(16),
      right(90),
      forward(16)
    ]);
  }
}
