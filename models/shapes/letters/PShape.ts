import {Shape} from "~/models/Shape";
import {move, penDown, right} from "~/helpers/StepFactories";

export class PShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      move(20),
      right(90),
      move(10),
      right(90),
      move(10),
      right(90),
      move(10)
    ]);
  }
}
