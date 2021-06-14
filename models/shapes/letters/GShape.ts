import {Shape} from "~/models/Shape";
import {forward, penDown, left} from "~/helpers/StepFactories";

export class GShape extends Shape {
  constructor() {
    super(27, 10, 180, [
      penDown(),
      forward(12),
      left(90),
      forward(20),
      left(90),
      forward(12),
      left(90),
      forward(8),
      left(90),
      forward(6),

    ]);
  }
}
