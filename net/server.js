var net = require('net');
var fs = require('fs');
var globalConf = require('./conf')


var server = net.createServer();
server.listen(globalConf.port,'127.0.0.1')

server.on('listening',function () {
    console.log('服务已启动')
})

server.on('connection',function (socket) {
    console.log('有新的连接')
    socket.on('data',function(data) {
        // console.log(data.toString());
        var requset = data.toString().split('\r\n');
        var url = requset[0].split(' ')[1];
        console.log(url)
        try{
            socket.write('HTTP 200OK\r\nContent-type:text/html\r\n\r\n')
            socket.write(fs.readFileSync(__dirname + url))
        }catch(e) {
            socket.write(`HTTP/1.1 404NotFound\r\n\r\n
            ${fs.readFileSync(__dirname + '/notfond.html')}`)
        }
        socket.end();

    })
    
})
server.on('close',function () {
    console.log('服务端已关闭')
})