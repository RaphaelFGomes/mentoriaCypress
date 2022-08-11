const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    default_server: 'http://www.automationpractice.com',
    username: 'carlosouzapsi@gmail.com',
    password: '123456'
  },
  retries: {
    runMode: 0,
    openMode: 0
  },
  defaultCommandTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
