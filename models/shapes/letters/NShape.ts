import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class NShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      move(20),
      right(150),
      move(23),
      left(150),
      move(20)
    ]);
  }
}
