#!/usr/bin/env node

/**
 * step1: chmod +x index.js  设置该文件为可执行文件
 * setp2: npm link 到全局
 * setp3: 执行 package.json 中的 bin 字段中的命令, 这里设置 bin: {"yun": "src/index.js"}, 就可以执行 `yun` 命令
 */
const welcome = require("./utils/cli-welcome");

const pkgJson = require("./package.json");

welcome({
  title: pkgJson.name,
  tagLine: "Hello, nice to meet you!",
  description: pkgJson.description,
  version: pkgJson.version,
  bgColor: "#FADC00",
  color: "#000000",
  bold: true,
  clear: true,
});

console.log("Node CLI - Test");
