//  PRODUCTION WEBPACK CONFIGURATION
const webpackCommon = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...webpackCommon,
  mode: "production",
  output: {
    ...webpackCommon.output,
    clean: true,
    filename: "[name].[contenthash].bundle.js",
  },
  optimization: {
    minimize: true,
    nodeEnv: "production",
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: "single",
  },
  plugins: [
    ...webpackCommon.plugins,
    new HtmlWebpackPlugin({
      template: "app/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
  devtool: false,
};
