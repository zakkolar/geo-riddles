import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class SShape extends Shape {
  constructor() {
    super(15, 30, 0, [
      penDown(),
      forward(10),
      left(90),
      forward(10),
      left(90),
      forward(10),
      right(90),
      forward(10),
      right(90),
      forward(10)
    ]);
  }
}
