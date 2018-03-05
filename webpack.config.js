const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const proxy = require('http-proxy-middleware');
const convert = require('koa-connect');
const Router = require('koa-router');

const router = new Router();

const proxyOptions = {
  target: 'http://samples.openweathermap.org/',
  logLevel: 'debug',
  changeOrigin: true,
  // ... see: https://github.com/chimurai/http-proxy-middleware#options
};

router.get('/data/*', convert(proxy(proxyOptions)));

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js',
    chunkFilename: '[id].chunk.js',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  /*externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },*/

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};

module.exports.serve = {
  content: [__dirname],
  add: (app, middleware, options) => {
    // since we're manipulating the order of middleware added, we need to handle
    // adding these two internal middleware functions.
    middleware.webpack();
    middleware.content();

    // router *must* be the last middleware added
    app.use(router.routes());
  },
};
