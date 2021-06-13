import {Shape} from "~/models/Shape";
import {move, penDown, right} from "~/helpers/StepFactories";

export class TriangleShape extends Shape {
  constructor() {
    super(13, 25, 0, [
      penDown(),
      move(16),
      right(240),
      move(16),
      right(240),
      move(16)
    ]);
  }
}
