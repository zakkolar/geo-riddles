/**
 * Runs a for loop starting in a random position and circling around
 * @param start The starting position of the loop (inclusive)
 * @param end The ending position of the loop (exclusive)
 * @param step The amount to increment the loop by
 * @param callback The function to call for each iteration of the loop. Return false inside to break the loop.
 */
export function ForLoopRandomStart(start: number, end: number, step: number, callback: (index: number) => void): void {
    let i = start;
    let offset = Math.floor(Math.random() * (end - start));
    while (i < end) {
        let currentIndex = i + offset;
        if (currentIndex >= end) {
            currentIndex -= (end - start);
        }
        const cont = callback(currentIndex);
        i += step;
        // @ts-ignore
      if(cont === false) {
          break;
        }
    }
}
