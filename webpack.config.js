const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname)
const assetPath = path.resolve(projectRoot, 'dist')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/client/index.js'
  },
  output: {
    filename: '[chunkhash].[name].js',
    path: assetPath,
    publicPath: '',
  },
  devServer: {},
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]:importLoaders=1!postcss-loader'
        })
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
    hints: false,
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
    new CleanWebpackPlugin(['dist'], {
      root: projectRoot
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'index.html'),
      files: {
        'js': ['*.main.js'],
        'css': ['*.main.css']
      }
    }),
    new ExtractTextPlugin({
      filename: '[chunkhash].[name].css'
    })
  ]
}
