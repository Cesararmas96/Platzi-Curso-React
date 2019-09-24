const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //crea un html linkeado con los archivos css y js de salida
const webpack = require("webpack"); //importamos webpack

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "http://localhost:9000/",
    chunkFilename: "js/[id].[chunkhash],js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true, //que abra una pestaña del navegador
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/"
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //inicializamos la clase con el modulo
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ]
};
