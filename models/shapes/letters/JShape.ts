import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class JShape extends Shape {
  constructor() {
    super(15, 22, -90,  [
      penDown(),
      forward(8),
      left(90),
      forward(8),
      left(90),
      forward(20),
      right(90),
      forward(8),
      right(180),
      forward(16)
    ]);
  }
}
