var http=require("http"),server=http.createServer(callback),fs=require("fs");
server.listen(process.argv[2]);
function callback(request,response){
  if (request.method != 'POST'){
    return response.end('send me a POST\n');
  }
  var rs =fs.createReadStream(process.argv[3]);
  rs.pipe(response);
}
/**
将一个服务器文件通过response对请求作出响应
process.argv[3]可被替换为一个文件路径
**/
