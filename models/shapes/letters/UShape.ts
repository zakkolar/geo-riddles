import {Shape} from "~/models/Shape";
import {forward, penDown, left} from "~/helpers/StepFactories";

export class UShape extends Shape {
  constructor() {
    super(15, 10, 270, [
      penDown(),
      forward(20),
      left(90),
      forward(12),
      left(90),
      forward(20)
    ]);
  }
}
