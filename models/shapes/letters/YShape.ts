import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class YShape extends Shape {
  constructor() {
    super(20, 30, 90, [
      penDown(),
      forward(14),
      left(45),
      forward(10),
      right(180),
      forward(10),
      left(90),
      forward(10)
    ]);
  }
}
