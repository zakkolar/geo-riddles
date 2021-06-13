import {Shape} from "~/models/Shape";
import {move, penDown, left, right} from "~/helpers/StepFactories";

export class VShape extends Shape {
  constructor() {
    super(15, 10, 270, [
      penDown(),
      move(16),
      left(45),
      move(8),
      left(90),
      move(8),
      left(45),
      move(16)
    ]);
  }
}
