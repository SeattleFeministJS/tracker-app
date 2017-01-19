const path = require('path')
const webpack = require('webpack')
module.exports = {
  plugins: [
      require('postcss-url'),
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('precss')(),
      require('postcss-calc')({
        mediaQueries: true
      }),
      require('postcss-cssnext')({browsers: ['last 2 versions', '> 5%']}),
      require('postcss-hexrgba')(),
      require('postcss-functions')({
        glob: path.join(__dirname, 'src', 'lib', '*.js')
      }),
      require('postcss-browser-reporter')()
    ]
};
