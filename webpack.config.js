// Webpack variables and plugins
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Aurelia plugin for Webpack
const { AureliaPlugin } = require('aurelia-webpack-plugin');

// Polyfills for non-evergreen browsers
const Map = require('core-js/es6/map');
const WeakMap = require('core-js/es6/weak-map');
const Promise = require('core-js/es6/promise');

module.exports = {
  entry: {
    main: [ 
      './ie-polyfill',
      'babel-polyfill',
      'aurelia-bootstrapper'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',    
    chunkFilename: '[name].js'
  },

  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules'].map(x => path.resolve(x)),
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {

          // use 'babel-preset-env' without transforming ES6 modules, and with added support for decorators
          presets: [['env', { modules: false }], 'stage-0'],
          plugins: ['transform-decorators-legacy']

        }
      },
      { test: /\.css$/i, 
        use: [
          'style-loader', 
          'css-loader'
        ] 
      },
      { test: /\.html$/i, 
        use: 'html-loader' }
    ]
  },  

  plugins: [

    // required polyfills for non-evergreen browsers
    new webpack.ProvidePlugin({        
        Map: 'core-js/es6/map',
        WeakMap: 'core-js/es6/weak-map',
        Promise: 'core-js/es6/promise'
    }),

    // init aurelia-webpack-plugin
    new AureliaPlugin(),
    
    // have Webpack copy over the index.html and inject appropriate script tag for Webpack-bundled entry point 'main.js'
    new HtmlWebpackPlugin({
        template: '!html-webpack-plugin/lib/loader!index.html',
        filename: 'index.html'
    })

  ]
};
