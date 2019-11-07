const path = require('path');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// still not work...
// const imgOutputPath = process.env.ENV_MODE === "build" ? 'images/[name].[ext]' : '../images/[name].[ext]';

module.exports = [{
  mode: "development", // "production" | "development" | "none"
  entry: {
    main: ['./src/ts/index.ts', './src/scss/index.scss']
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
            name: '../images/[name].[ext]'
            // outputPath: './images', 
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          // no need with MiniCssExtractPlugin
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: './css/bundle.css',
          //     // outputPath: './css',
          //   },
          // },
          // bug with file-loader: https://github.com/webpack-contrib/css-loader/issues/864#issuecomment-445815198
          // {
          //   loader: 'extract-loader'
          // },
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   // you can specify a publicPath here
            //   // by default it uses publicPath in webpackOptions.output
            //   publicPath: '../',
            //   hmr: process.env.NODE_ENV === 'development',
            // },
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
    new CopyPlugin([
      // { from: './src/images', to: './images' },
      {
        from: './src/*.html',
        to: './[name].[ext]',
        toType: 'template',
      },
    ]),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/index.html',
    //   chunks: ['index']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'single.html',
    //   template: './src/single.html',
    //   chunks: ['single']
    // })
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/bundle.css",
      // chunkFilename: "[id].css"
    })
  ]
}];