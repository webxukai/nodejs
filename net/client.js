var net = require('net');
var socket = net.connect(12345,'127.0.0.1')

socket.on('connect',function ( ) {
    console.log('客户端已连接')

})
socket.on('data',function ( data ){
    console.log(data.toString())
})
socket.write('hello,server')
socket.on('close',function() {
    console.log('客户端已关闭')
})
