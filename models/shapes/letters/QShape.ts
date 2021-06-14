import {Shape} from "~/models/Shape";
import {forward, penDown, right, penUp} from "~/helpers/StepFactories";

export class QShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      forward(20),
      right(90),
      forward(12),
      right(90),
      forward(14),
      right(30),
      forward(8),
      right(60),
      forward(8),
      right(90),
      forward(7),
      right(90),
      penUp(),
      forward(7),
      penDown(),
      right(45),
      forward(8),
    ]);
  }
}
