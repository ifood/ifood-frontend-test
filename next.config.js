/* eslint import/no-extraneous-dependencies: 0 */
require('dotenv').config();
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

module.exports = withSass({
  exportPathMap: () => ({
    '/': { page: '/index' },
  }),
  webpack: (config) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
});
