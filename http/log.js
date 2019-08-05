var fs = require("fs")
var globalConfig = require("./config");

var fileName = globalConfig.log_path + globalConfig.log_name

function log(data) {
    fs.writeFile(fileName,data + "\n",{flag:"a"},function(err){})
}
module.exports=log;