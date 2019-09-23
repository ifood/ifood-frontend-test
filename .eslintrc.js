module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
    'prettier',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'react',
    'prettier',
  ],
  'rules': {
    'require-jsdoc' : 0
  },
  'parser':'babel-eslint',
  'settings': {
    'react': {
      'createClass': 'createReactClass',
      'pragma': 'React',
      'version': 'detect',
      'flowVersion': '0.53'
    },
    'propWrapperFunctions': [
        'forbidExtraProps',
        {'property': 'freeze', 'object': 'Object'},
        {'property': 'myFavoriteWrapper'}
    ],
    'linkComponents': [
      'Hyperlink',
      {'name': 'Link', 'linkAttribute': 'to'}
    ]
  }
};
