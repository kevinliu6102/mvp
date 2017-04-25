const path = require('path')

const DEV = path.join(__dirname, '/dev')
const BUILD = path.join(__dirname, '/build')

module.exports = {
  entry: DEV + '/index.jsx',
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: DEV,
      query: {
        presets: [ 'es2015', 'react' ]
      }
    }]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  }
}