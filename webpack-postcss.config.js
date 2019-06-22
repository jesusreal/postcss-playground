const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './input.css',
  output: {
    path: __dirname ,
    filename: 'output.js',
    chunkFilename: 'output.[id].js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'output.css' }),
  ],
  mode: 'production',
};
