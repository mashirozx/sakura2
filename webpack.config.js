const path = require('path');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [{
  mode: "development", // "production" | "development" | "none"
  entry: {
    main: ['./src/scss/index.scss', path.resolve(__dirname, './src/ts/index.ts')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist'), //编译打包文件的位置
    publicPath: '/',
    port: 8080, //服务器端口号
    host: '0.0.0.0',
    // proxy: {}, //代理列表
    compress: true,
    // historyApiFallback: true, //开启服务器history重定向模式
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
            // 有毒💢
            // 现在的情况是 dev 时要手动 cp -r ./src/img ./dist
            // build 正常
            name: '../images/[name].[ext]'
            // outputPath: './images', 
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          //MiniCssExtractPlugin.loader,
          {
            loader: 'file-loader',
            options: {
              name: './css/bundle.css',
              // outputPath: './css',
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
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin({
  //     sourceMap: false,
  //   })],
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'single.html',
      template: './src/single.html',
      chunks: ['single']
    })
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[name]_[hash].css"
    // })
  ]
}];