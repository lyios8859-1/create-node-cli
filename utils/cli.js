const meow = require("meow");

const helpText = `
  Usage
    $ npx yun-node [options]
  
  Options
    social        Show the social info
    --no-social   Don't show the social info
    ad            Show the Ad info
    --no-ad       Don't show the Ad info
    -d, --debug   Print debug info


  Examples
    $ npx yun-node --no-social
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
  },
};

module.exports = meow(helpText, options);
