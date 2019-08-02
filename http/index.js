var http = require('http');
var url = require('url');
var fs = require('fs')
var globaConfig = require('./config')

http.createServer(function(req,res) {
   var pathname = url.parse(req.url).pathname
   var params = url.parse(req.url,true).query;
    console.log(globaConfig.port)
    var isStatic = isStaticRequset(pathname)
    if(isStatic) { // 请求静态文件
        fs.readFileSync(globaConfig['page_path'] + pathname)
    } else {

    }
}).listen(globaConfig.port)

function isStaticRequset(pathname) {
    for(var i=0;i<globaConfig.static_file_type.length;i ++) {
        var temp = globaConfig.static_file_type[i]
        if(pathname.indexOf(temp) == pathname.length - temp.length) {
            return true
        }
        console.log(globaConfig.static_file_type)
    }
    return false

}