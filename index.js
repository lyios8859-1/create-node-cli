#!/usr/bin/env node

/**
 * step1: chmod +x index.js  设置该文件为可执行文件
 * setp2: npm link 到全局
 * setp3: 执行 package.json 中的 bin 字段中的命令, 这里设置 bin: {"yun": "index.js"}, 就可以执行 `yun` 命令
 */
const chalk = require("chalk");

const init = require("./utils/init");
const cli = require("./utils/cli");
const debug = require("./utils/debug");
const { bio, ad, social } = require("./utils/data");

const log = console.log;
const { flags, input } = cli;

!(async () => {
  init();

  input.includes("help") && cli.showHelp(0);

  log(chalk.dim(bio));

  flags.social && log(social);

  flags.ad && log(chalk.blue(ad));

  debug({ flags, input }, flags.debug);

  log("\nNode CLI - Test\n");
})();
