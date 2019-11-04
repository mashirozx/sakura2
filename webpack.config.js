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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../dist/',
  },
  devServer:{
    contentBase: path.join(__dirname, 'src'),
    compress: false, // gzip
    port: 8080,
    publicPath: '/dist/'
  },
  module: {
    rules: [{
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [
          path.resolve(__dirname, './node_modules'),
        ],
        use: {
          loader: 'file-loader',
          options: {
            name(file) {
              // if (process.env.NODE_ENV === 'development') {
              //   return '[path][name].[ext]';
              // }
              // return '[hash].[ext]';
              return '[name].[ext]';
            },
            outputPath: 'images',
          },
        },
      },
      {
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
          // tooooooo slow!
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: ['./node_modules']
              },
            }
          },
          // source-map not supported in fast-sass-loader!
          // {
          //   loader: 'fast-sass-loader',
          //   options: {
          //     includePaths: ['./node_modules']
          //   }
          // },
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
      },
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