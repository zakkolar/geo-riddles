import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class MShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      forward(20),
      right(135),
      forward(8),
      left(90),
      forward(8),
      right(135),
      forward(20)
    ]);
  }
}
