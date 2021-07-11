const path = require('path')

const webpack = require('webpack')

const config = require('../mv3-hot-reload.config')

const srcDir = path.join(__dirname, '..', 'src')

module.exports = {
  entry: {
    popup: path.join(srcDir, 'popup'),
    options: path.join(srcDir, 'options'),
    background: path.join(srcDir, 'background'),
    content: path.join(srcDir, 'content'),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': srcDir,
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      MV3_HOT_RELOAD_PORT: config.port,
    }),
  ],
}
