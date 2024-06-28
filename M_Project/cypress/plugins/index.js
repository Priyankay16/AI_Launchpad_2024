/// <reference types="cypress" />

const readXlsx = require('./read-xlsx')

module.exports = (on, config) => {
  // require ('cypress-mochawesome-reporter/plugin')(on);
  // return config
on('task', {
    'readXlsx': readXlsx.read
  }) 
}