const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  return {
    mode: env.NODE_ENV,
    entry: path.join(__dirname, "src", "app.ts"),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "app.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
      })
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: [path.resolve(__dirname, "node_modules")],
          loader: "ts-loader"
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader"
          ]
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "/dist/"),
      inline: true,
      host: "localhost",
      port: 8080
    }
  };
};
