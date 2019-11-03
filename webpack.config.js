const path = require('path');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [{
  mode: "development", // "production" | "development" | "none"
  entry: {
    entry: ['./src/scss/index.scss', './src/ts/index.ts']
  },
  devtool: 'inline-source-map',
  output: {
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'fast-sass-loader',
            options: {
              includePaths: ['./node_modules']
            }
          },
        ]
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-typescript'],
          },
        }, ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      sourceMap: false,
    })],
  },
}];