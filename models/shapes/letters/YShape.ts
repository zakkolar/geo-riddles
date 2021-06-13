import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class YShape extends Shape {
  constructor() {
    super(20, 30, 90, [
      penDown(),
      move(14),
      left(45),
      move(10),
      right(180),
      move(10),
      left(90),
      move(10)
    ]);
  }
}
