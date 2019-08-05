var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"129.211.47.103",
    port:"3306",
    user:"root",
    password:"123456",
    database:"acp"
})
function selectUserinfo(){
    connection.connect();
    var sql = "select * from userinfo"
    connection.query(sql,function (err,res){
        if(err == null){
            console.log(res)
        } else {
            console.log(err)
        }
    })
    connection.end()
}
module.exports= selectUserinfo;
