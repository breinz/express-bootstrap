module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: "<rootDir>/src/test/setup.ts",
  //globalTeardown: "<rootDir>/src/test/teardown.ts",
  notify: true
};