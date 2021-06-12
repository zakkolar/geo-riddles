import {RotateRightStep} from "~/models/steps/RotateRightStep";
import {PenDownStep} from "~/models/steps/PenDownStep";
import {PenUpStep} from "~/models/steps/PenUpStep";
import {MoveStep} from "~/models/steps/MoveStep";
import {RotateLeftStep} from "~/models/steps/RotateLeftStep";

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
 * Shortcut to create a new MoveStep
 * @param {number} distance - The distance moved in this step
 * @return {MoveStep} Newly created MoveStep
 */
export function move(distance: number): MoveStep {
    return new MoveStep(distance);
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
