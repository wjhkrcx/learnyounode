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
��һ���������ļ�ͨ��response������������Ӧ
process.argv[3]�ɱ��滻Ϊһ���ļ�·��
**/
