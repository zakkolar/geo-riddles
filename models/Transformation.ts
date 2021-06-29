/**
* Transforms a number into a math problem
*/
export abstract class Transformation {
  protected constructor(){

  }

  /**
   * Turns the provided input into a math problem
   * @param number The number to transform
   * @return a string representing the problem that needs to be solved in order to answer
   */
  abstract transform(number: number): string;

}
