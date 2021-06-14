import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class LShape extends Shape {
  constructor() {
    super(23, 30, 180, [
      penDown(),
      forward(8),
      right(90),
      forward(20)

    ]);
  }
}
