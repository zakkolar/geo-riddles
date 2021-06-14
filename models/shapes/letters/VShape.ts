import {Shape} from "~/models/Shape";
import {forward, penDown, left} from "~/helpers/StepFactories";

export class VShape extends Shape {
  constructor() {
    super(15, 10, 270, [
      penDown(),
      forward(16),
      left(45),
      forward(8),
      left(90),
      forward(8),
      left(45),
      forward(16)
    ]);
  }
}
