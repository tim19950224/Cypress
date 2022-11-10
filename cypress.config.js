const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    chromeWebSecurity: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      xml: true
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  "experimentalStudio": true,
  // "reporter": "cypress-mochawesome-reporter",
  //       "reporterOptions": {
  //       "reportDir": "cypress/report",
  //       "reportPageTitle": "custom-title",
  //       "overwrite": false,
  //       "html": true,
  //       "json": true
  //     }
  
});
