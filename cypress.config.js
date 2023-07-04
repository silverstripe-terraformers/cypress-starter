const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // allow overriding baseUrl in cypress.env.json file - per machine
  const baseUrl = config.env.baseUrl || null;

  if (baseUrl) {
    config.baseUrl = baseUrl;
  }

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

const isCI = process.env.CI;
const ciReportSettings = {
  reporter: "junit",
    reporterOptions: {
      testsuitesTitle: true,
      mochaFile: "./reports/cypress/junit.[hash].xml"
    }
};

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    screenshotOnRunFailure: true, // enable screenshots of failed tests
    video: false, // enable a video of the test to be saved if the test fails
    specPattern: ["cypress/e2e/*.feature", "cypress/qa/*.feature"],
    setupNodeEvents,
    // add report settings on CI environments
    ...(isCI ? ciReportSettings : {})
  },
});

