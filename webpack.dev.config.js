const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname)
const assetPath = path.resolve(projectRoot, 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: "web",
  context: projectRoot,
  devtool: "inline-source-map",
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?http://localhost:8080',
      './src/client/index.js'
      ]
  },
  output: {
    filename: '[hash].[name].js',
    path: assetPath,
    publicPath: '/',
  },
  devServer: {
    hot: true,
    contentBase: assetPath,
    publicPath: '/'
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
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader'
        ]
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'index.html'),
      files: {
        'js': ['*.main.js'],
        'css': ['*.main.css']
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    })
  ]
}
