const path = require("path");
const entryFile = "app.js";

module.exports = {
  entry: ["whatwg-fetch", `./${entryFile}`],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `build`)
  },
  devServer: {
    contentBase: path.join(__dirname),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
