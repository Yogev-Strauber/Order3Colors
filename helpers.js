/**
 * Sample array of colors for testing and demonstration purposes.
 * Contains a mix of red, blue, and green colors in random order.
 * @type {string[]}
 */
export const colors = ['red', 'blue', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue'];

/**
 * Array of valid color values that are allowed in the system.
 * @type {string[]}
 */
const validColors = ['red', 'green', 'blue'];

/**
 * Swaps two elements in an array at the specified indices.
 * This function creates a new array and does not mutate the original.
 * 
 * @param {Array} arr - The array to perform the swap operation on.
 * @param {number} index1 - The index of the first element to swap.
 * @param {number} index2 - The index of the second element to swap.
 * @returns {Array} A new array with the swapped elements.
 * 
 * @example
 * const arr = ['red', 'blue', 'green'];
 * const swapped = swapBalls(arr, 0, 2); // Returns ['green', 'blue', 'red']
 * // arr remains unchanged: ['red', 'blue', 'green']
 */
export const swapBalls = (arr, index1, index2) => {
    if (!arr) return [];
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) return arr;

    const arrCopy = [...arr];
    const temp = arrCopy[index1];
    arrCopy[index1] = arrCopy[index2];
    arrCopy[index2] = temp;

    return arrCopy;
}



/**
 * Counts the occurrences of each color in an array.
 * Returns an object with counts for red, blue, and green colors.
 * 
 * @param {string[]} arr - Array of color strings to count.
 * @returns {{red: number, blue: number, green: number}} Object containing the count of each color.
 * 
 * @example
 * countColors(['red', 'blue', 'red', 'green']);
 * // Returns { red: 2, blue: 1, green: 1 }
 */
export const countColors = (arr) => {

    let redCounter = 0, blueCounter = 0, greenCounter = 0;

    arr.forEach(c => {

        switch (c) {
            case 'red':
                redCounter++;
                break;
            case 'blue':
                blueCounter++;
                break;
            case 'green':
                greenCounter++;
                break;
        }

    });

    return { red: redCounter, blue: blueCounter, green: greenCounter };

}

/**
 * Checks if all elements in an array are equal.
 * Returns true for empty arrays and arrays with single elements.
 * 
 * @param {Array} arr - The array to check.
 * @returns {boolean} True if all elements are equal, false otherwise.
 * 
 * @example
 * allElementsEqual(['red', 'red', 'red']); // Returns true
 * allElementsEqual(['red', 'blue', 'red']); // Returns false
 * allElementsEqual([]); // Returns true
 * allElementsEqual(['red']); // Returns true
 */
export const allElementsEqual = (arr) => {
    return arr.every(element => element === arr[0]);
};

/**
 * Validates if an array contains only valid color values (red, green, blue).
 * Returns false for null/undefined arrays or arrays with invalid colors.
 * 
 * @param {Array} arr - The array to validate.
 * @returns {boolean} True if all elements are valid colors, false otherwise.
 * 
 * @example
 * isValidArray(['red', 'green', 'blue']); // Returns true
 * isValidArray(['red', 'yellow', 'blue']); // Returns false
 * isValidArray(null); // Returns false
 */
export const isValidArray = (arr) => {
    if (!arr) return false;
    if (arr.length <= 1) return false;
    if (allElementsEqual(arr)) return false;
    const isValidColor = (color) => validColors.includes(color);
    return arr.every(isValidColor);
};

export const testArrays = [
    /*1) */ ['red', 'blue', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue'],
    /*2) */ ['red', 'red', 'red', 'red'],
    /*3) */ ['blue', 'blue', 'blue', 'blue'],
    /*4) */ ['green', 'green', 'green', 'green'],
    /*5) */ ['red', 'blue', 'green'],
    /*6) */ ['blue', 'green', 'red'],
    /*7) */ ['green', 'red', 'blue'],
    /*8) */ [],
    /*9) */ ['red', 'blue', 'green', 'yellow'], // includes an unexpected color
    /*10) */ ['red', 'blue', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'blue', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue'], // larger array
    /*11) */ ['red'], // single element
    /*12) */ ['blue'], // single element
    /*13) */ ['green'], // single element
    /*14) */ ['red', 'green'], // two elements
    /*15) */ ['green', 'red'], // two elements
    /*16) */ ['blue', 'green'], // two elements
    /*17) */ ['green', 'blue'], // two elements
    /*18) */ ['red', 'blue'], // two elements
    /*19) */ ['blue', 'red'], // two elements
    /*20) */ ['red', 'red', 'blue', 'blue'], // already partially sorted
    /*21) */ ['blue', 'blue', 'red', 'red'], // reverse order
    /*22) */ ['green', 'green', 'red', 'blue'], // green at start
    /*23) */ ['red', 'blue', 'green', 'green'], // green at end
    /*24) */ ['red', 'green', 'blue', 'red', 'green', 'blue'], // alternating pattern
    /*25) */ ['blue', 'red', 'green', 'blue', 'red', 'green'], // different alternating
    /*26) */ ['green', 'red', 'blue', 'green', 'red', 'blue'], // green first alternating
    /*27) */ ['red', 'red', 'green', 'green', 'blue', 'blue'], // already sorted
    /*28) */ ['blue', 'blue', 'green', 'green', 'red', 'red'], // reverse sorted
    /*29) */ ['red', 'blue', 'red', 'blue', 'red', 'blue'], // only red and blue
    /*30) */ ['green', 'blue', 'green', 'blue', 'green', 'blue'], // only green and blue
    /*31) */ ['red', 'green', 'red', 'green', 'red', 'green'], // only red and green
    /*32) */ ['red', 'red', 'red', 'blue', 'blue', 'blue', 'green', 'green', 'green'], // grouped but wrong order
    /*33) */ ['green', 'green', 'green', 'red', 'red', 'red', 'blue', 'blue', 'blue'], // grouped but wrong order
    /*34) */ ['blue', 'blue', 'blue', 'green', 'green', 'green', 'red', 'red', 'red'], // grouped but wrong order
    /*35) */ ['red', 'blue', 'green', 'red', 'blue', 'green', 'red', 'blue', 'green'], // repeating pattern
    /*36) */ ['green', 'red', 'blue', 'green', 'red', 'blue', 'green', 'red', 'blue'], // different repeating pattern
    /*37) */ ['blue', 'green', 'red', 'blue', 'green', 'red', 'blue', 'green', 'red'], // another repeating pattern
    /*38) */ ['red', 'yellow', 'blue'], // invalid color in middle
    /*39) */ ['yellow', 'red', 'blue'], // invalid color at start
    /*40) */ ['red', 'blue', 'yellow'], // invalid color at end
    /*41) */ ['yellow', 'yellow', 'yellow'], // all invalid colors
    /*42) */ ['red', 'blue', 'green', 'purple', 'orange'], // multiple invalid colors
    /*43) */ ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
    /*44) */ ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
    /*45) */ ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
    /*46) */ ['red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'blue', 'blue', 'blue', 'blue', 'blue'],
    /*47) */ ['red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'blue', 'blue', 'blue', 'blue', 'blue'],
];

export const solutions = [
    /*1) */ ['red', 'red', 'red', 'green', 'green', 'green', 'blue', 'blue', 'blue', 'blue'],
    /*2) */ ['red', 'red', 'red', 'red'],
    /*3) */ ['blue', 'blue', 'blue', 'blue'],
    /*4) */ ['green', 'green', 'green', 'green'],
    /*5) */ ['red', 'green', 'blue'],
    /*6) */ ['red', 'green', 'blue'],
    /*7) */ ['red', 'green', 'blue'],
    /*8) */ [],
    /*9) */ ['red', 'blue', 'green', 'yellow'],
    /*10) */ ['red', 'red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
    /*11) */ ['red'],
    /*12) */ ['blue'],
    /*13) */ ['green'],
    /*14) */ ['red', 'green'],
    /*15) */ ['red', 'green'],
    /*16) */ ['green', 'blue'],
    /*17) */ ['green', 'blue'],
    /*18) */ ['red', 'blue'],
    /*19) */ ['red', 'blue'],
    /*20) */ ['red', 'red', 'blue', 'blue'],
    /*21) */ ['red', 'red', 'blue', 'blue'],
    /*22) */ ['red', 'green', 'green', 'blue'],
    /*23) */ ['red', 'green', 'green', 'blue'],
    /*24) */ ['red', 'red', 'green', 'green', 'blue', 'blue'],
    /*25) */ ['red', 'red', 'green', 'green', 'blue', 'blue'],
    /*26) */ ['red', 'red', 'green', 'green', 'blue', 'blue'],
    /*27) */ ['red', 'red', 'green', 'green', 'blue', 'blue'],
    /*28) */ ['red', 'red', 'green', 'green', 'blue', 'blue'],
    /*29) */ ['red', 'red', 'red', 'blue', 'blue', 'blue'],
    /*30) */ ['green', 'green', 'green', 'blue', 'blue', 'blue'],
    /*31) */ ['red', 'red', 'red', 'green', 'green', 'green'],
    /*32) */ ['red', 'red', 'red', 'green', 'green', 'green', 'blue', 'blue', 'blue'],
    /*33) */ ['red', 'red', 'red', 'green', 'green', 'green', 'blue', 'blue', 'blue'],
    /*34) */ ['red', 'red', 'red', 'green', 'green', 'green', 'blue', 'blue', 'blue'],
    /*35) */ ['red', 'red', 'red', 'green', 'green', 'green', 'blue', 'blue', 'blue'],
    /*36) */ ['red', 'red', 'red', 'green', 'green', 'green', 'blue', 'blue', 'blue'],
    /*37) */ ['red', 'red', 'red', 'green', 'green', 'green', 'blue', 'blue', 'blue'],
    /*38) */ ['red', 'yellow', 'blue'],
    /*39) */ ['yellow', 'red', 'blue'],
    /*40) */ ['red', 'blue', 'yellow'],
    /*41) */ ['yellow', 'yellow', 'yellow'],
    /*42) */ ['red', 'blue', 'green', 'purple', 'orange'],
    /*43) */ ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
    /*44) */ ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
    /*45) */ ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
    /*46) */ ['red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'blue', 'blue', 'blue', 'blue', 'blue'],
    /*47) */ ['red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'blue', 'blue', 'blue', 'blue', 'blue'],
];