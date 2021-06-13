import {Shape} from "~/models/Shape";
import {move, penDown, left, right, penUp} from "~/helpers/StepFactories";

export class QShape extends Shape {
  constructor() {
    super(15, 30, 90, [
      penDown(),
      move(20),
      right(90),
      move(12),
      right(90),
      move(14),
      right(30),
      move(8),
      right(60),
      move(8),
      right(90),
      move(7),
      right(90),
      penUp(),
      move(7),
      penDown(),
      right(45),
      move(8),
    ]);
  }
}
