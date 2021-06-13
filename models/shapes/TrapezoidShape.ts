import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class TrapezoidShape extends Shape {
  constructor() {
    super(5, 20, 90, [
      penDown(),
      right(45),
      move(16),
      right(45),
      move(8),
      right(45),
      move(16),
      right(135),
      move(32),
    ]);
  }
}
