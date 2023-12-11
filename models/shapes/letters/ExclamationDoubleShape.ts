import {Shape} from "~/models/Shape";
import {forward, penDown, penUp, right} from "~/helpers/StepFactories";

export class ExclamationDoubleShape extends Shape {
  constructor() {
    super(18, 30, 90, [
      penDown(),
      forward(3),
      penUp(),
      forward(4),
      penDown(),
      forward(13),
      penUp(),
      right(90),
      forward(6),
      right(90),
      penDown(),
      forward(13),
      penUp(),
      forward(4),
      penDown(),
      forward(3),
    ]);
  }
}
