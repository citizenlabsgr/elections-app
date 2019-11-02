const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'voterRegistration',
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject:"body"
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
         rules: [
          {
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
          {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader',
               'sass-loader',
             ],
           },
         ],
       },
};