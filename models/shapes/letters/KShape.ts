import {Shape} from "~/models/Shape";
import {forward, penDown, left, right} from "~/helpers/StepFactories";

export class KShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      forward(20),
      right(180),
      forward(8),
      left(135),
      forward(11),
      right(180),
      forward(11),
      left(80),
      forward(15)
    ]);
  }
}
