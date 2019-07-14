# CHANGE LOG

## 2019-7-14

- 将处理样式的 loader 配置分离到一个单独的 js 文件
- 排除 node_modules 以及 dist_webpack 文件夹中 js 文件的语法检测
- Webpack 打包时，会将所有 js 及 css 文件分类到打包目录下的 js 文件夹及 css 文件夹

## 2019-7-13

- 将 webpack 的 production 及 development 模式的配置拆分为两个不同的配置文件
- webpack 开发模式下不再打开浏览器
- 使用 cross-env 兼容跨平台环境变量的设置
