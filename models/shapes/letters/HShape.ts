import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class HShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      forward(20),
      right(180),
      forward(10),
      left(90),
      forward(10),
      left(90),
      forward(10),
      right(180),
      forward(20),
    ]);
  }
}
