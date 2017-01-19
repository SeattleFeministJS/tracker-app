const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname)
const assetPath = path.resolve(projectRoot, 'app')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: assetPath,
    publicPath: '',
  },
  devServer: { inline: true },
  watchOptions: {
    poll: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [ path.resolve(__dirname, 'src', 'client') ],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: "source-map",
  context: projectRoot,
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'index.html'),
      files: {
        'js': ['bundle.js']
      }
    })
  ]
}
