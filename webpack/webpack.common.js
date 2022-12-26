// COMMON WEBPACK CONFIGURATION
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../app/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../app/assets"),
          to: "public/",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "app/index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: "file-loader",
        include: [path.join(__dirname, "../app/assets")],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
          { loader: "file-loader" },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        include: [path.join(__dirname, "../app/assets")],
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              limit: 100 * 1024,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        include: [path.join(__dirname, "../app/assets")],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", "app"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  target: "web",
  performance: {
    hints: false,
  },
};
