import {Shape} from "~/models/Shape";
import {move, penDown, repeat, right} from "~/helpers/StepFactories";

export class HexagonRepeatShape extends Shape {
  constructor() {
    super(15, 10, 0, [
      penDown(),
      repeat(6, [
        move(10),
        right(60),
      ])
    ]);
  }
}
