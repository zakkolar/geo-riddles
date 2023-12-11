import {Shape} from "~/models/Shape";
import {forward, penDown, penUp, right} from "~/helpers/StepFactories";

export class ExclamationSingleShape extends Shape {
  constructor() {
    super(22, 30, 90, [
      penDown(),
      forward(3),
      penUp(),
      forward(4),
      penDown(),
      forward(13)
    ]);
  }
}
