var http=require("http"),argv=process.argv;
function callback(response){
  response.setEncoding("utf-8");
  response.on("data",function(data){console.log(data);});
  response.on("error",function(error){console.log(error);});
}
http.get(argv[2],callback).on("error",function(error){console.log(error);});

/**也可以如下写法
var http = require('http');
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
}).on('error', console.error);**/
