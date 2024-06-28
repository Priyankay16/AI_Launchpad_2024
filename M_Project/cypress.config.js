const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder:"mochawesome-report/assets",

  //video:true,
  "reporter":"cypress-multi-reporters",
  "reporterOptions":{
    "reporterEnabled":"mochawesome",
    "mochawsomeReporteroptions":{
      "reportDir":"cypress/reports/mochareports",
      "reportFilename":'report',
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
