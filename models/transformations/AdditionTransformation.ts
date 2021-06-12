import {Transformation} from "~/models/Transformation";
import {addCommas} from "~/helpers/MathHelpers";

export abstract class AdditionTransformation extends Transformation {

  private readonly digits: number;
  protected constructor(digits: number){
    super();
    this.digits = digits;
  }

  transform(number: number): string {

    // Transform the number into a string to check its length
    let numberString = `${number}`;

    const originalNumberLength = numberString.length;

    // Decide whether the final number will be at the beginning or end
    // Only used if we need to add digits
    const numberPosition = Math.floor(Math.random() * 1000) % 2 === 0 ? 'first' : 'last';


    // If necessary, add extra digits to make the solution the correct length
    while(numberString.length < this.digits) {
      if(numberPosition === 'first'){
        numberString = `${numberString}${Math.floor(Math.random() * 10)}`;
      }
      else{
        numberString = `${Math.floor(Math.random() * 10)}${numberString}`;
      }
    }

    // Make sure the solution doesn't start with a 0
    if(numberString.substring(0,1) === '0'){
      numberString = `${Math.floor((Math.random() * 9)) + 1}${numberString.substring(1)}`;
    }

    // Turn the new answer into a number
    const solution = parseInt(numberString);


    const num1 = Math.ceil(Math.random() * (solution - 1));

    const num2 = solution - num1;

    let puzzleString = ``;

    if(solution !== number){
      const digits = originalNumberLength > 1 ? `${originalNumberLength} digits` : `digit`;
      puzzleString = `the ${numberPosition} ${digits} of`;
    }

    puzzleString = `${puzzleString} ${addCommas(num1)} + ${addCommas(num2)}`;

    return puzzleString;
  }

}
