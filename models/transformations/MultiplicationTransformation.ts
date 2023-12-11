import {Transformation} from "~/models/Transformation";
import {addCommas} from "~/helpers/MathHelpers";
import {ForLoopRandomStart} from "~/helpers/ForLoopRandomStart";

export class MultiplicationTransformation extends Transformation {
  // performance lags when smaller number of digits is higher than 3

  private readonly digits: number[];

  protected constructor(digits1: number, digits2: number){
    super();
    this.digits = [digits1, digits2].sort();
  }

  findTransformationFactors(number: number) {
    let [d, D] = this.digits;

    let transformation:any = null;

    let increaseFactor = 0;

    const maxIterations = d === 1 ? 5 : 3;


    let foundNumber = false;

    do {
      let increase = Math.pow(10, d * increaseFactor);

      let transformedNumber = number * increase;

      ForLoopRandomStart(Math.pow(10, d - 1 ), Math.pow(10, d ), 1, smallFactor => {
        ForLoopRandomStart(0, increase, 1, i => {
          let product = transformedNumber + i;
          const largeFactor = product / smallFactor;

          if(product % smallFactor === 0 && largeFactor > 1 && smallFactor > 1 && largeFactor.toString().length === D){
            transformation = {
              product,
              smallFactor,
              largeFactor
            };
            foundNumber = true;
            return false;
          }
        })
        if(foundNumber) {
          return false;
        }
      })
    }
    while(!transformation && ++increaseFactor < maxIterations);

    return transformation;
  }

  transform(number: number): string {
    const transformation = this.findTransformationFactors(number);

    if(transformation) {
      const transformText = `${addCommas(transformation.smallFactor)} × ${addCommas(transformation.largeFactor)}`;

      if(transformation.product === number){
        return transformText;
      }
      else {
        const numDigits = number.toString().length;
        const digitLabel = numDigits > 1 ? `${numDigits} digits` : `digit`;

        return `the <b>first ${digitLabel}</b> of ${transformText}`;
      }

    }

    return number.toString();
  }

}
