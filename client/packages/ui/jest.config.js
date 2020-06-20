const { join } = require("path")
const packageConfig = require('./package.json');

module.exports = {
  displayName: packageConfig.name,
  preset: "ts-jest",
  moduleNameMapper: {
    '^@project$': '<rootDir>/src'
  },
  testMatch: [join(__dirname, "tests/**/*.spec.{ts,tsx}")],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.tests.json'
    }
  }
}
