import {Shape} from "~/models/Shape";
import {forward, penDown, right, penUp} from "~/helpers/StepFactories";

export class FShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
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
