import {Shape} from "~/models/Shape";
import {move, penDown, repeat, right} from "~/helpers/StepFactories";

export class TriangleRepeatShape extends Shape {
  constructor() {
    super(13, 25, 0, [
      penDown(),
      repeat(3, [
        move(16),
        right(240),
      ])
    ]);
  }
}
