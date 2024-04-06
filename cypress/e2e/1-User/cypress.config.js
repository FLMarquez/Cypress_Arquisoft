const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  viewportWidth: 1500,
  viewportHeight: 864,
  chromeWebSeurity: false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 19000,
  projectId: "se1mbb",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },

   
  },
});
