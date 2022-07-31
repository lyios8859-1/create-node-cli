const welcome = require("./cli-welcome");
const alerts = require("./cli-alerts");
const checkNode = require("./cli-check-node-version");
const unhandled = require("./cli-handle-unhandled");

const pkgJson = require("./../package.json");

module.exports = () => {
  // 检测有报错,退出进程
  unhandled();

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

  // 检测 nodejs 版本
  checkNode("12");
};
