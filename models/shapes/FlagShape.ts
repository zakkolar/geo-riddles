import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class FlagShape extends Shape {
  constructor() {
    super(10, 30, 90, [
      penDown(),
      forward (22),
      right(100),
      forward(27),
      right(152),
      forward(28)
    ]);
  }
}
