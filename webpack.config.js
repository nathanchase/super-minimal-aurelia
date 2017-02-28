const path = require("path");
const BabiliPlugin = require("babili-webpack-plugin");
const { AureliaPlugin } = require("aurelia-webpack-plugin");
// TODO: this is only temporary until a patched aurelia release is published.
const coreDeps = require("aurelia-core-dependencies");

module.exports = {
  entry: { "main": "aurelia-bootstrapper" },

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "[name].js",    
    chunkFilename: "[name].js"
  },

  resolve: {
    extensions: [".js"],
    modules: ["src", "node_modules"].map(x => path.resolve(x)),
    symlinks: false,
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-decorators-legacy' ]
        }
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.html$/i, use: "html-loader" }
    ]
  },  

  plugins: [
    new AureliaPlugin({
      dist: 'es2015',
      features: { svg: false, unparser: false, polyfills: "esnext" },
    }),
    coreDeps,
    new BabiliPlugin()
  ],
};