import { countColors, colors, allElementsEqual } from "./helpers.js";
import log from './logger.js';
import unitTest from './unitTesting.js';
import { isValidArray } from './helpers.js';

/*
out of the box solution
1st step - count colors
2nd step - override the array
3rd step - return the array

*/



export const overrideColors = (colors) => {
    const colorsCopy = [...colors];

    if (!isValidArray(colorsCopy)) return colorsCopy;


    const counters = countColors(colorsCopy);
    colorsCopy.fill('red', 0, counters.red);
    colorsCopy.fill('green', counters.red, counters.red + counters.green);
    colorsCopy.fill('blue', counters.red + counters.green, colorsCopy.length);

    return colorsCopy;
};

const result = overrideColors(colors);
log(result);

unitTest(overrideColors);

// Big O = O(n)
// space complexity = O(1)
// time complexity = O(n) + O(n) = O(2n) = O(n)
// where n is the length of the array
// we go over the array twice - once to count and once to override
// we use only a constant amount of extra space for the counters
// we do not use any extra space that grows with the input size
// this is the optimal solution for this problem
// we can not do better than O(n) time complexity because we have to look at each element at least once
// we can not do better than O(1) space complexity because we need to store the counters
// this solution is not stable - the order of the same colors is not preserved
// but the problem does not require stability
// this solution works for any number of colors, not just 3
// we can easily extend it to more colors by adding more counters and fill calls
// but the time complexity will still be O(n) and space complexity will still be O(1)
// this solution is easy to understand and implement
// this solution is efficient and works well for large arrays
// this solution is not the only solution - there are other ways to solve this problem
// but this is the most straightforward and efficient solution
// this can easly converted into n colors where can be vary large number of colors