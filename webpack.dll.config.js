const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    //bundle de cosas comunes en toda la aplicacion
    //es decir, las dependencias core
    modules: ["react", "react-dom", "react-router-dom"]
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].dll.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
};