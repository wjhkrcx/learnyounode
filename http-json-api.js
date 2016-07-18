var http=require("http"),server=http.createServer(callback),fs=require("fs");
server.listen(process.argv[2]);
function callback(request,response){
  var url=request.url,time=require("url").parse(url,true).query.iso,date=new Date(time),obj;
  if (!date) {
    response.writeHead(404);
    response.end();
  }
  response.writeHead(200, { 'Content-Type': 'application/json' });
  if (request.url.indexOf("/api/parsetime")>-1) {
    obj={"hour":date.getHours(),"minute":date.getMinutes(),"second":date.getSeconds()};
    return response.end(JSON.stringify(obj));
  }
  if (request.url.indexOf("/api/unixtime")>-1) {
    obj={"unixtime":date.getTime()};//date.getTime()���ص���unixʱ���
    return response.end(JSON.stringify(obj));
  }
}
/**
response.write()�ᵼ�²�ȷ���Ƿ��������ʱ�˻�end()�Ż᷵��
ȷ������ʱ��response.end();
**/
