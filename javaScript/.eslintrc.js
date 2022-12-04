module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/prettier', 'prettier', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
    experimentalObjectRestSpread: true,
    requireConfigFile: 'false',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': 0,
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0,
  },
}
