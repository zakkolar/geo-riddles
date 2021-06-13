import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class WShape extends Shape {
  constructor() {
    super(15, 10, 270, [
      penDown(),
      move(20),
      left(135),
      move(8),
      right(90),
      move(8),
      left(135),
      move(20),
    ]);
  }
}
