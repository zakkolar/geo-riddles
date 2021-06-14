import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class TShape extends Shape {
  constructor() {
    super(23, 30, 90, [
      penDown(),
      forward(20),
      right(90),
      forward(8),
      right(180),
      forward(16)
    ]);
  }
}
