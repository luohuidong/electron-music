const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function getStyleLoader() {
  // 判断是否为生产模式
  const isProdMode = process.env.NODE_ENV === 'production';

  const useStyleLoader = isProdMode
    ? MiniCssExtractPlugin.loader
    : "style-loader";

  const usePostCSSLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'postcss-preset-env',
          ],
        ],
      },
    },
  }

  const cssLoader = {
    test: /\.css$/,
    exclude: /\.module\.css$/,
    use: [useStyleLoader, "css-loader", usePostCSSLoader,],
  };

  const cssModuleLoader = {
    test: /\.module\.css$/,
    use: [
      useStyleLoader,
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
      usePostCSSLoader,
    ],
  };

  const sassLoader = {
    test: /\.module\.scss$/,
    use: [
      useStyleLoader,
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      }, // translates CSS into CommonJS
      "sass-loader", // compiles Sass to CSS, using Node Sass by default
      usePostCSSLoader,
    ],
  };

  return [cssLoader, cssModuleLoader, sassLoader];
};
