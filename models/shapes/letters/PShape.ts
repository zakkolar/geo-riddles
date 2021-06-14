import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class PShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      forward(20),
      right(90),
      forward(10),
      right(90),
      forward(10),
      right(90),
      forward(10)
    ]);
  }
}
