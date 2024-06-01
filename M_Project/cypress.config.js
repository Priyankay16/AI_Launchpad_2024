const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //video:true,
  e2e: {
    setupNodeEvents(on, config) {
      
      return require('./cypress/plugins/index.js')(on,config)
    },
    //baseUrl:'https://react-redux.realworld.io/'
  },
});
