const DotenvPlugin = require('dotenv-webpack')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin({ disable: true })

module.exports = smp.wrap({
  stats: {
    // fallback value for stats options when an option is not defined
    // (has precedence over local webpack defaults)
    all: undefined,
    // Add timing information
    timings: true,
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        include: /src/,
        loader: 'eslint-loader',
        options: {
          emitWarning: process.env.NODE_ENV !== 'production',
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        options: {
          // disable: true,
          mozjpeg: {
            progressive: true,
            quality: 65,
            dct: 'float',
            optimize: true,
          },
          optipng: {
            optimizationLevel: 7,
          },
          pngquant: {
            quality: [0.65, 0.9],
            speed: 1,
          },
        },
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: 'pre',
      },
    ],
  },
  plugins: [new DotenvPlugin()],

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
})
