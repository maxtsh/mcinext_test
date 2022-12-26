//  DEVELOPMENT WEBPACK CONFIGURATION
const webpackCommon = require("./webpack.common");

module.exports = {
  ...webpackCommon,
  mode: "development",
  entry: "/app/index.tsx",
  plugins: [...webpackCommon.plugins],
  output: {
    ...webpackCommon.output,
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    port: 4000,
    static: "public",
  },
  performance: {
    hints: false,
  },
};
