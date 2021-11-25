var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader", // 1. Turns sass into css
        ],
      },
    ],
  },
  mode: "development",
  plugins: [
    new NodePolyfillPlugin(),
    new Dotenv(),

    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      REACT_APP_TOKEN: JSON.stringify(process.env.REACT_APP_TOKEN),
    }),
  ],
};
