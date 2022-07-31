#!/usr/bin/env node

/**
 * step1: chmod +x index.js  设置该文件为可执行文件
 * setp2: npm link 到全局
 * setp3: 执行 package.json 中的 bin 字段中的命令, 这里设置 bin: {"yun": "src/index.js"}, 就可以执行 `yun` 命令
 */

const chalk = require("chalk");
const clearConsole = require("./utils/clear-any-console");

// 清空控制台
clearConsole();

console.log("Node CLI - Test");
