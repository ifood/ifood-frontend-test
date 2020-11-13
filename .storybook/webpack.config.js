const path = require('path')

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    I18n: path.resolve(__dirname, '../i18n/build')
  }

  return config
}
