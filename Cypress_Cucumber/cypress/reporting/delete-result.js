#!/usr/bin/env node

const rimraf = require('rimraf')
 
const testResultsDir = './cypress/test-result'
 
rimraf(testResultsDir, () => {
 console.log('Deleted former test result.')
})


