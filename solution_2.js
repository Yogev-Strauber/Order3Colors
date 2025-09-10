import { colors, swapBalls } from "./helpers.js";
import log from './logger.js';
import unitTest from './unitTesting.js';
import { isValidArray } from './helpers.js';

/*

Pointers solution:

    1. set pointers to start,and end;
    2. check for the conditions:
        a. start = not red and end = red --> swap and move both pointers
        b. start = red --> move start pointer
        c. end = not blue and start = blue --> swap and move both pointers
        d. end = blue --> move end pointer
    3. when start > end - stop

*/

const pointersSort = (colorsArray) => {
    if (!isValidArray(colorsArray)) return colorsArray;

    const RED = 'red';
    const BLUE = 'blue';
    const GREEN = 'green';

    let start = 0, end = colorsArray.length - 1, scanner = 0;
    let sortedColors = [...colorsArray];


    while (scanner <= end) {

        switch (sortedColors[scanner]) {
            case RED:
                sortedColors = swapBalls(sortedColors, scanner, start);
                scanner++; start++;
                break

            case BLUE:
                sortedColors = swapBalls(sortedColors, scanner, end);
                end--;
                break;

            case GREEN:
                scanner++;
                break;
        }
    }

    return sortedColors;
};

const result = pointersSort(colors);
log(result);

unitTest(pointersSort);

// Big O Analysis (Dutch National Flag - single pass)
// time complexity = O(n)  // each element is inspected at most once; swaps are constant-time
// space complexity = O(1) // in-place pointer movement (if using spread for an immutable copy, that copy is O(n))
//
// Pros:
// - Single pass (very fast): O(n) time
// - Constant extra space when done in-place
// - Stable middle placement for 'green' emerges naturally
// - No counting pass required
//
// Cons:
// - Logic is trickier to implement correctly than counting-based rebuild
// - Edge cases can cause pointer stalls if conditions are incomplete
// - Immutability requires copying first (O(n) memory)
// - harder to scale up to more colors i,e add yellow and now the order should be r,g,b,y where in 1st soltion will be very easy to add almost with no time of work...

