#!/usr/bin/env node

/**
 * step1: chmod +x index.js  设置该文件为可执行文件
 * setp2: npm link 到全局
 * setp3: 执行 package.json 中的 bin 字段中的命令, 这里设置 bin: {"yun": "index.js"}, 就可以执行 `yun` 命令
 */
const chalk = require("chalk");

const { bio, ad, social } = require("./utils/data");
const alerts = require("./utils/cli-alerts");
const init = require("./utils/init");

const log = console.log;

!(async () => {
  init();

  log(`${chalk.dim(bio)}
${social}

${chalk.blue(ad)}
`);

  alerts({ type: "info", msg: "Node CLI - Test", name: "Tip" });
})();
