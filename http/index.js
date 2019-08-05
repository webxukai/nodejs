var http = require('http');
var url = require('url');
var fs = require('fs')
var globaConfig = require('./config')
var loader = require('./loader')
var log = require("./log")

http.createServer(function(req,res) {
   var pathName = url.parse(req.url).pathname
   var params = url.parse(req.url,true).query;
    var isStatic = isStaticRequset(pathName)
    console.log(isStatic)
    if(isStatic) { // 请求静态文件
        try {
            var data = fs.readFileSync(globaConfig['page_path'] + pathName)
            res.writeHead(200);
            res.write(data);
            res.end();
        }catch(e) {
            res.writeHead(404);
            res.write(fs.readFileSync(__dirname + '/page/notfond.html'))
            res.end()
        }

    } else { // 请求动态
        if(loader.get(pathName) != null) {
            try {
                loader.get(pathName)(req,res)
            } catch(e) {
                res.writeHead(500);
                res.write(fs.readFileSync(__dirname + '/page/notfond.html'))
                res.end()
            }
        }else {
            res.writeHead(404);
            res.write(fs.readFileSync(__dirname + '/page/notfond.html'))
            res.end()
        }

    }
}).listen(globaConfig.port)
log("服务已启动")

function isStaticRequset(pathName) {
    for(var i=0;i<globaConfig.static_file_type.length;i ++) {
        var temp = globaConfig.static_file_type[i]
        console.log(pathName)
        if(pathName.indexOf(temp) == pathName.length - temp.length) {
            return true
        }
        // console.log(globaConfig.static_file_type)
    }
    return false

}