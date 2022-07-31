const meow = require("meow");
const { green, yellow, cyan, dim } = require("chalk");

const helpText = `
  Usage
    ${dim("$")} ${green("npx yun-node")} ${yellow("[options]")} ${cyan(
  "<commands>"
)}
  
  Options
    ${yellow("social")}        Print the social information
    ${yellow("--no-social")}   Don't print the social information
    ${yellow("ad")}            Print the Ad information
    ${yellow("--no-ad")}       Don't print the Ad information
    ${yellow("-d")}, ${yellow("--debug")}   Print debug information
    ${yellow("-v")}, ${yellow("--version")} Print CLI version

  Commands
    ${cyan("help")}          Print CLI help information

  Examples
    ${dim("$")} ${green("npx yun-node")} ${yellow("--no-social")}
    ${dim("$")} ${green("npx yun-node")} ${yellow("help")}
`;
const options = {
  flags: {
    social: {
      type: "boolean",
      default: true,
    },
    ad: {
      type: "boolean",
      default: true,
    },
    debug: {
      type: "boolean",
      default: false,
      alias: "d",
    },
    version: {
      type: "boolean",
      default: false,
      alias: "v",
    },
  },
};

module.exports = meow(helpText, options);
