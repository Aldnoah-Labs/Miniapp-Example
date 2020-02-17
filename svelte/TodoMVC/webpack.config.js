const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const envConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);

module.exports = env => {
  return webpackMerge(
    {
      mode: env.mode,
      resolve: {
        extensions: [".wasm", ".mjs", ".js", ".svelte", ".json"],
        mainFields: ["svelte", "browser", "module", "main"]
      },
      plugins: [
          new webpack.ProgressPlugin(), 
          new HtmlWebpackPlugin({ template: "./src/index.html"}),
        ],
     module: {
            rules: [
              {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
              },
              {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]'
                  }
                }
              },
            ]
          }
    },
    envConfig(env)
  );
};