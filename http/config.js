var fs = require('fs');

var conf = fs.readFileSync('./server.conf');
var confArr = conf.toString().split('\r\n');
var globaConfig = {}
for (i = 0;i < confArr.length;i ++) {
    globaConfig[confArr[i].split('=')[0]]=confArr[i].split('=')[1]

}
if(globaConfig.static_file_type) {
    globaConfig.static_file_type = globaConfig.static_file_type.split('|');
}else {
    throw new Error('配置文件异常，缺少static_file_type')
}
console.log(globaConfig)
module.exports = globaConfig