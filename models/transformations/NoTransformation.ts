import {Transformation} from "~/models/Transformation";

export class NoTransformation extends Transformation {

  constructor(){
    super();
  }

  transform(number: number): string {
    return `${number}`;
  }

}
