import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class HShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      move(20),
      right(180),
      move(10),
      left(90),
      move(10),
      left(90),
      move(10),
      right(180),
      move(20),
    ]);
  }
}
