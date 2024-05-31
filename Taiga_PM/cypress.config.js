const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://tree.taiga.io/',
    viewportWidth: 1366,
    viewportHeight: 768,
    experimentalStudio: true,
   // defaultCommandTimeout:6000
  },
});
