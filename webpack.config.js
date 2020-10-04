var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080'
    }),
    new HtmlWebpackPlugin({
      title: 'Frontend Playground',
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
};