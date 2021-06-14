import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class WShape extends Shape {
  constructor() {
    super(15, 10, 270, [
      penDown(),
      forward(20),
      left(135),
      forward(8),
      right(90),
      forward(8),
      left(135),
      forward(20),
    ]);
  }
}
