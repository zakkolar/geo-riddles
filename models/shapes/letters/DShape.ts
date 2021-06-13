import {Shape} from "~/models/Shape";
import {move, penDown, right} from "~/helpers/StepFactories";

export class DShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      move(20),
      right(90),
      move(8),
      right(45),
      move(4),
      right(45),
      move(16),
      right(45),
      move(4),
      right(45),
      move(8),

    ]);
  }
}
