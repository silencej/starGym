const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        use: [
          { loader: "file" }
        ],
      },
    ],
  },
}
