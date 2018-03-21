var os = require("os");
var mymodule = require("./mymodule.js");

var userName = os.userInfo().username;

console.log(mymodule.getMessage(userName));