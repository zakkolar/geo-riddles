import {Shape} from "~/models/Shape";
import {forward, penDown, right, penUp} from "~/helpers/StepFactories";

export class EShape extends Shape {
  constructor() {
    super(23, 30, 180, [
      penDown(),
      forward(8),
      right(90),
      forward(20),
      right(90),
      forward(8),
      right(90),
      penUp(),
      forward(10),
      penDown(),
      right(90),
      forward(8)

    ]);
  }
}
