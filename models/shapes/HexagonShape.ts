import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class HexagonShape extends Shape {
  constructor() {
    super(15, 10, 0, [
      penDown(),
      forward(10),
      right(60),
      forward(10),
      right(60),
      forward(10),
      right(60),
      forward(10),
      right(60),
      forward(10),
      right(60),
      forward(10)
    ]);
  }
}
