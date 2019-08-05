var path = new Map()
function getData(req,res) {
    console.log(req);
    res.writeHead(200);
    res.write('hello')
    res.end()
}
path.set("/getData",getData);

module.exports.path = path