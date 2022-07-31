const alerts = require("./utils/cli-alerts");
const checkNode = require("./utils/cli-check-node-version");
const unhandled = require("./utils/cli-handle-unhandled");

alerts({
  type: "success",
  msg: "success.",
  name: Math.random() > 0.5 ? "AliasTips" : "",
});
alerts({
  type: "warning",
  msg: "warning.",
  name: Math.random() > 0.5 ? "AliasTips" : "",
});
alerts({
  type: "info",
  msg: "info.",
  name: Math.random() > 0.5 ? "AliasTips" : "",
});
alerts({
  type: "error",
  msg: "error.",
  name: Math.random() > 0.5 ? "AliasTips" : "",
});

// 检测 nodejs 版本
checkNode("12");
checkNode("12", { fail: true });

// 检测是否有报错
// unhandled();
// Promise.reject(new Error("Some an error"));
