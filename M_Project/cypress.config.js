const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //video:true,
  "reporter":"cypress-multi-reporters",
  "reporterOptions":{
    "reporterEnabled":"mochawesome",
    "mochawsomeReporteroptions":{
      "reportDir":"cypress/reports/mocha",
      "quiet":true,
      "overwrite":false,
      "html":false,
      "json":true
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      
      return require('./cypress/plugins/index.js')(on,config)
    },
    //baseUrl:'https://react-redux.realworld.io/'
  },
});
