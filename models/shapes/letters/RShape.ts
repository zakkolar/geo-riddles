import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class RShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      forward(20),
      right(90),
      forward(12),
      right(90),
      forward(10),
      right(90),
      forward(12),
      left(140),
      forward(15)
    ]);
  }
}
