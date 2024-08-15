// jest.config.js
/** @type {import('jest').Config} */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const config = {
  testEnvironment: "jest-environment-jsdom", // Ensure this is set correctly
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["./setupTests.ts"], // Ensure this is correct
};

module.exports = createJestConfig(config);
