const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: [
    'babel-polyfill',
    './src/index'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public/assets/'),
    publicPath: '/assets/'
  },

  watch: NODE_ENV === 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : 'nosources-source-map',

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, 'src'),
        use: [
          'react-hot',
          {
            loader: 'babel'
          }
        ]
      },
      {
        test: /\.scss$/,
        include: resolve(__dirname, 'src'),
        use: [
          {
            loader: 'style'
          },
          {
            loader: 'css'
          },
          {
            loader: 'postcss'
          },
          {
            loader: 'sass'
          }
        ]
      }
    ]
  },

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, './public'),
    publicPath: '/assets/',
    host: 'localhost',
    port: 8080,
    historyApiFallback: true
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ]
};

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}
