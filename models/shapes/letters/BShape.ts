import {Shape} from "~/models/Shape";
import {forward, penDown, right} from "~/helpers/StepFactories";

export class BShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      forward(20),
      right(90),
      forward(8),
      right(90),
      forward(8),
      right(45),
      forward(4),
      right(45),
      forward(4),
      right(180),
      forward(8),
      right(90),
      forward(8),
      right(90),
      forward(8)

    ]);
  }
}
