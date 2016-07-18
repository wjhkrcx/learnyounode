var http=require("http"),server=http.createServer(callback),fs=require("fs");
server.listen(process.argv[2]);
function callback(request,response){
  if (request.method != 'POST'){
    return response.end('send me a POST\n');
  }
  var data="";
  request.on("data" ,function(file){data+=file.toString().toUpperCase();});
  request.on("end",function(){response.write(data);});
}
/**
读出request请求带过来的数据，并转为大写发回
**/
/**官方答案
var http = require('http')
var map = require('through2-map')//第三方npm

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
**/
