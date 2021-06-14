import {Shape} from "~/models/Shape";
import {forward, penDown, repeat, right} from "~/helpers/StepFactories";

export class SquareRepeatShape extends Shape {
  constructor() {
    super(10, 10, 0, [
      penDown(),
      repeat(4, [
        forward(16),
        right(90),
      ])
    ]);
  }
}
