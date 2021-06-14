import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class TrapezoidShape extends Shape {
  constructor() {
    super(5, 20, 90, [
      penDown(),
      right(45),
      forward(16),
      right(45),
      forward(8),
      right(45),
      forward(16),
      right(135),
      forward(32),
    ]);
  }
}
