import {NoTransformation} from "~/models/transformations/NoTransformation";
import {Addition2DigitTransformation} from "~/models/transformations/Addition2DigitTransformation";
import {Addition3DigitTransformation} from "~/models/transformations/Addition3DigitTransformation";
import {Addition4DigitTransformation} from "~/models/transformations/Addition4DigitTransformation";
import {Addition5DigitTransformation} from "~/models/transformations/Addition5DigitTransformation";

export const NO_TRANSFORMATION = new NoTransformation();

export const TRANSFORMATIONS = [
  {
    label: 'No transformation',
    transformation:  NO_TRANSFORMATION,
  },
  {
    label: 'Addition in the 10s',
    transformation:  new Addition2DigitTransformation(),
  },
  {
    label: 'Addition in the 100s',
    transformation:  new Addition3DigitTransformation(),
  },
  {
    label: 'Addition in the 1,000s',
    transformation:  new Addition4DigitTransformation(),
  },
  {
    label:  'Addition in the 10,000s',
    transformation:  new Addition5DigitTransformation(),
  },
  ]
