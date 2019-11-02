const path = require('path');
const autoprefixer = require('autoprefixer');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
  mode: "development", // "production" | "development" | "none"
  entry: {
    entry: ['./src/scss/index.scss', './src/ts/index.ts']
  },
  devtool: 'inline-source-map',
  output: {
    //path: path.resolve(__dirname, "dist"),
    // about publicPath: https://juejin.im/post/5ae9ae5e518825672f19b094
    publicPath : '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
               plugins: () => [autoprefixer()]
            }
          },
          { 
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['./node_modules']
              }
            } 
          },
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          { 
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-typescript'],
            },
          },
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  // plugins: [
  //   new UglifyJsPlugin({
  //     test: /\.js($|\?)/i
  //   })
  // ]
}];