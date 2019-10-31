const path = require('path');

module.exports = [{
  mode: "development", // "production" | "development" | "none"
  entry: {
    style_bundle: './src/scss/index.scss',
    script_bundle: './src/ts/index.ts'
  },
  devtool: 'inline-source-map',
  output: {
    //path: path.resolve(__dirname, "dist"),
    //what's the difference?
    publicPath : 'dist',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'dist',
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
}];