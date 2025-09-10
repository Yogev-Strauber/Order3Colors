import { testArrays, solutions } from './helpers.js';
import log from './logger.js';
testArrays

const unitTest = (orderingFunc) => {

    if (!orderingFunc) {

        log('No ordering function provided'); return;
    }
    else
        if (typeof orderingFunc !== 'function') {

            log('Ordering function is not a function'); return;
        }

    log('                                                        ');
    log('                                                        ');
    log('*************** Running unit tests... ****************');
    log('*****************************************************');

    let failedTestsString = '';
    let failedCounter = 0;
    const results = [];

    testArrays.forEach((arr, index) => {
        const result = orderingFunc(arr);
        results.push(result);
        if (JSON.stringify(solutions[index]) !== JSON.stringify(result)) {

            failedTestsString += `Test case ${index + 1}: => Failed \n
            initial: ${testArrays[index]}\n
            expected: ${solutions[index]}\n
            result: ${results[index]}\n`
            failedCounter++;
        }

    });

    log('*****************************************************');
    log(failedTestsString)
    log('*************** Unit tests completed... ****************');
    log(`${solutions.length - failedCounter} tests Passed while ${failedCounter} Failed`)
    log('*****************************************************');

}

export default unitTest;