import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class JShape extends Shape {
  constructor() {
    super(15, 22, -90,  [
      penDown(),
      move(8),
      left(90),
      move(8),
      left(90),
      move(20),
      right(90),
      move(8),
      right(180),
      move(16)
    ]);
  }
}
