const path = require('path')
const config = require('./webpack.config.js')

config.devServer = {
  historyApiFallback: true,
  contentBase: path.join(__dirname, '../build'),
  port: 8080,
  proxy: {
    '/search': {
      target: 'https://api.twitter.com/1.1',
      changeOrigin: true
    }
  }
}

config.devtool = 'inline-source-map'

module.exports = config
