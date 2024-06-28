#!/usr/bin/env node

// const rimraf = require('rimraf');

// const testResultsDir = './cypress/test-result';

// // Using the callback-based API
// rimraf(testResultsDir, (err) => {
//     if (err) {
//         console.error('Error deleting test results:', err);
//     } else {
//         console.log('Deleted former test results.');
//     }
// });

// Alternatively, using the promise-based API (if your version of rimraf supports it)
const rimrafPromise = require('rimraf').promises;

rimrafPromise(testResultsDir)
    .then(() => {
        console.log('Deleted former test results.');
    })
    .catch((err) => {
        console.error('Error deleting test results:', err);
    });

