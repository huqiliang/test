const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

module.exports = function() {
  const version = path.join(__dirname, "../dist/version.txt");
  const info = shell.exec("git tag");
  console.log("====================================");
  console.log(info);
  console.log("====================================");
  fs.writeFileSync(version, "1.0.1");
};
