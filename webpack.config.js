const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = [{
  mode: "development", // "production" | "development" | "none"
  entry: {
    //style_bundle: './src/scss/index.scss',
    //script_bundle: './src/ts/index.ts'
    entry: ['./src/scss/index.scss', './src/ts/index.ts']
  },
  devtool: 'inline-source-map',
  output: {
    //path: path.resolve(__dirname, "dist"),
    //what's the difference?
    //publicPath : 'assets',
    //filename: '[name].js',
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
              //path inside dist folder
              //outputPath: 'assets',
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
          { loader: 'ts-loader' },
          { 
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env'],
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
}];