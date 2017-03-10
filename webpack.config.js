const path = require("path");
const { AureliaPlugin } = require("aurelia-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  entry: "aurelia-bootstrapper",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",    
    chunkFilename: "[name].js"
  },

  resolve: {
    extensions: [".js"],
    modules: ["src", "node_modules"].map(x => path.resolve(x)),
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
      { test: /\.css$/i, 
        use: [
          "style-loader", 
          "css-loader"
        ] 
      },
      { test: /\.html$/i, 
        use: "html-loader" }
    ]
  },  

  plugins: [
    new AureliaPlugin(),
    new BabiliPlugin()
  ],
};