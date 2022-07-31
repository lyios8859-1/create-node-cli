#!/usr/bin/env node

/**
 * step1: chmod +x index.js  设置该文件为可执行文件
 * setp2: npm link 到全局
 * setp3: 执行 package.json 中的 bin 字段中的命令, 这里设置 bin: {"yun": "src/index.js"}, 就可以执行 `yun` 命令
 */
const chalk = require("chalk");

const welcome = require("./utils/cli-welcome");
const alerts = require("./utils/cli-alerts");

const pkgJson = require("./package.json");

const { bio, ad, social, blog, blogName } = require("./utils/data");

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

const log = console.log;

log(`${chalk.dim(bio)}
${social}
${chalk.dim(blogName + ": " + blog)}

${chalk.blue(ad)}
`);

alerts({
  type: "success",
  msg: "success.",
  name: "",
});
alerts({
  type: "warning",
  msg: "warning.",
  name: "",
});
alerts({
  type: "info",
  msg: "info.",
  name: "",
});
alerts({
  type: "error",
  msg: "error.",
  name: "",
});

log("Node CLI - Test\n");
