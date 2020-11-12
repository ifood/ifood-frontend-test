module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['jsx-a11y'],
  rules: {
    camelcase: 'off',
    'no-console': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [1, { devDependencies: true }],
  },
};
