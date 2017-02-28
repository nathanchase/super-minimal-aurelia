const path = require("path");
const webpack = require('webpack');
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
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.html$/i, use: "html-loader" }
    ]
  },  

  plugins: [
    new AureliaPlugin(),
    coreDeps,
    new webpack.LoaderOptionsPlugin({
      options: {
          context: __dirname,
          'html-minifier-loader': {
              removeComments: true,               // remove all comments
              collapseWhitespace: true,           // collapse white space between block elements (div, header, footer, p etc...)
              collapseInlineTagWhitespace: true,  // collapse white space between inline elements (button, span, i, b, a etc...)
              collapseBooleanAttributes: true,    // <input required="required"/> => <input required />
              removeAttributeQuotes: true,        // <input class="abcd" /> => <input class=abcd />
              minifyCSS: true,                    // <input style="display: inline-block; width: 50px;" /> => <input style="display:inline-block;width:50px;"/>
              minifyJS: true,                     // same with CSS but for javascript
              removeScriptTypeAttributes: true,   // <script type="text/javascript"> => <script>
              removeStyleLinkTypeAttributes: true // <link type="text/css" /> => <link />
          }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: { screw_ie8: true, keep_fnames: true},
      dead_code: true,
      unused: true,
      comments: true,
      compress: {
          screw_ie8: true,
          keep_fnames: true,
          drop_debugger: false,
          dead_code: false,
          unused: false,
          warnings: false
      }
    })
  ],
};