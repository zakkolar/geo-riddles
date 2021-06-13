import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class LShape extends Shape {
  constructor() {
    super(23, 30, 180, [
      penDown(),
      move(8),
      right(90),
      move(20)

    ]);
  }
}
