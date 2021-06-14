import {RotateRightStep} from "~/models/steps/RotateRightStep";
import {PenDownStep} from "~/models/steps/PenDownStep";
import {PenUpStep} from "~/models/steps/PenUpStep";
import {MoveForwardStep} from "~/models/steps/MoveForwardStep";
import {RotateLeftStep} from "~/models/steps/RotateLeftStep";
import {Step} from "~/models/Step";
import {RepeatStep} from "~/models/steps/RepeatStep";

/**
 * Shortcut to create a new PenUpStep
 * @return {PenUpStep} Newly created PenUpStep
 */
export function penUp(): PenUpStep {
    return new PenUpStep();
}

/**
 * Shortcut to create a new PenDownStep
 * @return {PenDownStep} Newly created PenDownStep
 */
export function penDown(): PenDownStep {
    return new PenDownStep();
}

/**
 * Shortcut to create a new MoveForwardStep
 * @param {number} distance - The distance moved in this step
 * @return {MoveForwardStep} Newly created MoveForwardStep
 */
export function forward(distance: number): MoveForwardStep {
    return new MoveForwardStep(distance);
}

/**
 * Shortcut to create a new RotateLeftStep
 * @param {number} angle - The angle rotated left in this step
 * @return {RotateLeftStep} Newly created RotateLeftStep
 */
export function left(angle: number): RotateLeftStep {
    return new RotateLeftStep(angle);
}

/**
 * Shortcut to create a new RotateRightStep
 * @param {number} angle - The angle rotated right in this step
 * @return {RotateRightStep} Newly created RotateRightStep
 */
export function right(angle: number): RotateRightStep {
    return new RotateRightStep(angle);
}

export function repeat(times: number, steps: Step[]): RepeatStep {
  return new RepeatStep(times, steps);
}
