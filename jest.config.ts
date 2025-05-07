const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(svg|png|jpg|jpeg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};

module.exports = createJestConfig(customJestConfig);
