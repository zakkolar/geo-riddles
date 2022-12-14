import {Transformation} from "~/models/Transformation";
import {addCommas} from "~/helpers/MathHelpers";

export class MultiplicationTransformation extends Transformation {
  // performance lags when smaller number of digits is higher than 3

  private readonly digits: number[];

  protected constructor(digits1: number, digits2: number){
    super();
    this.digits = [digits1, digits2].sort();
  }

  transform(number: number): string {

    let [d, D] = this.digits;

    let transformedNumber;

    let transformation = null;

    let increaseFactor = 0;

    const maxIterations = d === 1 ? 4 : 3;

    do {
      let transformationsToTest = [], smallFactorsToTest = [];

      let increase = Math.pow(10, d * increaseFactor);

      transformedNumber = number * increase;

      for(let i = 0; i < increase; i++) {
        transformationsToTest.push(transformedNumber + i);
      }



      for(let i = Math.pow(10, d - 1 ); i < Math.pow(10, d ); i++){
        for(let transformation of transformationsToTest){

          const smallFactor = i;
          const largeFactor = transformation / smallFactor;

          if(transformation % i === 0 && largeFactor > 1 && smallFactor > 1){
            smallFactorsToTest.push({
              transformation,
              smallFactor,
              largeFactor
            });
          }
        }
      }


      for(let i = smallFactorsToTest.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [smallFactorsToTest[i], smallFactorsToTest[j]] = [smallFactorsToTest[j], smallFactorsToTest[i]];
      }


      transformation = smallFactorsToTest.find(smallFactor => smallFactor.largeFactor.toString().length === D );


    }
    while(!transformation && ++increaseFactor < maxIterations);


    if(transformation) {

      const transformText = `${transformation.smallFactor} x ${transformation.largeFactor}`;

      if(transformation.transformation === number){
        return transformText;
      }
      else {
        const numDigits = number.toString().length;
        const digitLabel = numDigits > 1 ? `${numDigits} digits` : `digit`;

        return `the first ${digitLabel} of ${transformText}`;
      }

    }

    return number.toString();
  }

}
