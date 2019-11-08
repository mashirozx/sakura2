const path = require('path');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Chunks2JsonPlugin = require('chunks-2-json-webpack-plugin');

// const OutputPath = process.env.ENV_MODE

module.exports = [{
  mode: "development", // "production" | "development" | "none"
  entry: {
    main: ['./src/ts/index.ts', './src/scss/index.scss']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/bundle_[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    publicPath: '/',
    port: 8080,
    host: '0.0.0.0',
    // proxy: {}, 
    compress: true,
    // historyApiFallback: true, 
  },
  watchOptions: {
    aggregateTimeout: 300,
    //poll: 1000, // specifying a poll interval in milliseconds
    ignored: /node_modules/
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
            // name(file) {
            //   return './images/[name].[ext]';
            // },
            name: '../images/[hash].[ext]'
            // outputPath: './images', 
          },
        },
      },
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
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
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: ['./node_modules']
              },
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
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin({
  //     sourceMap: false,
  //   })],
  // },
  plugins: [
    new CopyPlugin([{
        from: './src/package.less',
        to: './style.css',
        toType: 'file',
      },
      {
        from: './src/screenshot.png',
        to: './screenshot.png',
        toType: 'file',
      },
      {
        from: './src/images/',
        to: './images/[hash].[ext]',
        toType: 'template',
      },
      // {
      //   from: './src/*.html',
      //   to: './[name].[ext]',
      //   toType: 'template',
      // },
      {
        from: './src/php/*.php',
        to: './[name].[ext]',
        toType: 'template',
      },
      {
        from: './src/php/*/*',
        to: './[1]/[2].[ext]',
        test: /src\/php\/([^/]+)\/(.+)\.php$/,
      }
    ]),
    new RemovePlugin({
      before: {
        include: ['./dist', './images']
      },
      after: {
        include: ['./images']
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "./css/bundle_[hash].css",
      // chunkFilename: "[id].css"
    }),
    new Chunks2JsonPlugin({
      outputDir: 'dist/',
      filename: 'manifest.json'
    })
  ],
}];