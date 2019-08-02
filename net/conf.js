var fs = require('fs');
var conf = fs.readFileSync('server.config')
var confs = conf.toString().split('\r\n');
var globalConf = {}
for (var i = 0;i < confs.length;i ++) {
    var tempConf = confs[i].split('=')
    if (tempConf.length < 2) {
        continue
    } else {

        globalConf[tempConf[0]] = tempConf[1]
    }
}
module.exports = globalConf;