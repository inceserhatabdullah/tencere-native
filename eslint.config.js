// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tsParser = require('@typescript-eslint/parser');

module.exports = defineConfig([
  expoConfig,
  {
    languageOptions: {
      parser: tsParser,
    },
    ignores: ['dist/*'],
  },
]);
