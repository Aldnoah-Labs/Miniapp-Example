module.exports = env => ({
  module: {
    rules: [
      {
        test: /\.(js)$/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(js)$/,
        loader: "babel-loader"
      },
      {
        test: /\.s?css$/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            hotReload: true
          }
        }
      }
    ]
  }
});