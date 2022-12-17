import {NoTransformation} from "~/models/transformations/NoTransformation";
import {Addition2DigitTransformation} from "~/models/transformations/Addition2DigitTransformation";
import {Addition3DigitTransformation} from "~/models/transformations/Addition3DigitTransformation";
import {Addition4DigitTransformation} from "~/models/transformations/Addition4DigitTransformation";
import {Addition5DigitTransformation} from "~/models/transformations/Addition5DigitTransformation";
import {Multiplication1by3Transformation} from "~/models/transformations/Multiplication1by3Transformation";
import {Multiplication1by2Transformation} from "~/models/transformations/Multiplication1by2Transformation";
import {Multiplication1by4Transformation} from "~/models/transformations/Multiplication1by4Transformation";
import {Multiplication2by2Transformation} from "~/models/transformations/Multiplication2by2Transformation";
import {Multiplication2by3Transformation} from "~/models/transformations/Multiplication2by3Transformation";
import {Multiplication2by4Transformation} from "~/models/transformations/Multiplication2by4Transformation";
import {Multiplication1by5Transformation} from "~/models/transformations/Multiplication1by5Transformation";
import {Multiplication2by5Transformation} from "~/models/transformations/Multiplication2by5Transformation";

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
  {
    label: 'Multiplication 1 by 2',
    transformation:  new Multiplication1by2Transformation(),
  },
  {
    label: 'Multiplication 1 by 3',
    transformation: new Multiplication1by3Transformation()
  },
  {
    label: 'Multiplication 1 by 4',
    transformation: new Multiplication1by4Transformation()
  },
  {
    label: 'Multiplication 1 by 5',
    transformation: new Multiplication1by5Transformation()
  },
  {
    label: 'Multiplication 2 by 2',
    transformation: new Multiplication2by2Transformation()
  },
  {
    label: 'Multiplication 2 by 3',
    transformation: new Multiplication2by3Transformation()
  },
  {
    label: 'Multiplication 2 by 4',
    transformation: new Multiplication2by4Transformation()
  },
  {
    label: 'Multiplication 2 by 5',
    transformation: new Multiplication2by5Transformation()
  }
  ]
