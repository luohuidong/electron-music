import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function getStyleLoader(env: {
  production: boolean;
}) {
  // 判断是否为生产模式
  const isProdMode = env.production;

  const cssRegex = /\.css$/;
  const cssModuleRegex = /\.module\.css$/;

  const useStyleLoader = isProdMode ? MiniCssExtractPlugin.loader : 'style-loader';

  const cssLoader = {
    test: cssRegex,
    exclude: cssModuleRegex,
    use: [
      useStyleLoader,
      'css-loader',
    ],
  };

  const cssModuleLoader = {
    test: cssModuleRegex,
    use: [
      useStyleLoader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  };

  const sassLoader = {
    test: /\.scss$/,
    use: [
      useStyleLoader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      }, // translates CSS into CommonJS
      'sass-loader', // compiles Sass to CSS, using Node Sass by default
    ],
  };

  return [cssLoader, cssModuleLoader, sassLoader];
}
