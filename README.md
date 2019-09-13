# Electron boilerplate

使用了 Electron, React, TypeScript, Webpack 的 Electron 项目模板，用于快速搭建 Electron 项目。

## 运行

### 安装 node 依赖

```bash
npm i
```

### 开发

开启 webpack，默认开启服务的端口为 8080：

```bash
npm run webpack-renderer-dev
```

开启 electron：

```bash
electron-dev
```

### 打包

Webpack 打包

```bash
webpack-renderer-build
```

Electron mac 打包

```bash
electron-pack
```

这两个打包顺序不能更改
