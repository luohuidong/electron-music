const styleLoader = require("./style");
const babelLoader = require("./babel");
const fileLoader = require("./file");

module.exports = [...styleLoader(), babelLoader, fileLoader];
