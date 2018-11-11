const path = require('path');

module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 9,
  },
  'rules': {},
  'globals': {},
  'plugins': [
    'import',
    'promise',
    'react',
  ],
  'settings': {
    'react': {
      'version': '16.6.1',
    },
    'import/resolver': {
      'webpack': {
        'config': path.resolve(__dirname, 'webpack.config.development.js'),
      }
    },
  }
};
