# CHANGE LOG

## 2019-9-6

- 将 electron builder 的配置从 package.json 文件中抽离出来，单独存放在 electron-builder.json 文件中。

## 2019-8-25

- React Developer Tools 及 Redux DevTools 仅在开发模式下加载
- 新增 Mac 打包功能

## 2019-8-19

- 新增 React Developer Tools 及 Redux DevTools 开发工具

## 2019-8-18

- 去除 babel polyfill，改为在 src/renderer/index.tsx 中直接引用 core-js 和 regenerator-runtime

## 2019-8-2

- 升级 Electron 至 6.0.0 版本

## 2019-7-31

- 配置 Webpack 热更新

## 2019-7-30

- 配置 ESLint 对 TypeScript 的语法检测

## 2019-7-28

- JavaScript 与 TypeScript 统一使用 Babel 进行编译

## 2019-7-24

- 添加页面 favicon

## 2019-7-17

- js 打包文件名添加基于内容的 hash 值。
- 打包的 js 文件中，将 webpack runtime 代码拆分成一个独立的 chunk
- 打包的 js 文件中，将所有第三方库拆分单独的 chunk

## 2019-7-14

- 将处理样式的 loader 配置分离到一个单独的 js 文件
- 排除 node_modules 以及 dist_webpack 文件夹中 js 文件的语法检测
- Webpack 打包时，会将所有 js 及 css 文件分类到打包目录下的 js 文件夹及 css 文件夹

## 2019-7-13

- 将 webpack 的 production 及 development 模式的配置拆分为两个不同的配置文件
- webpack 开发模式下不再打开浏览器
- 使用 cross-env 兼容跨平台环境变量的设置
