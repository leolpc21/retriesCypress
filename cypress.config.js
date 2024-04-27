const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: 1,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
