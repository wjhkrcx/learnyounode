var http=require("http"),url=process.argv[2];
http.get(url,callback);
function callback(response){
  var dataRs="";
  response.setEncoding("utf-8");
  response.on("data",function(data){dataRs+=data;});
  response.on("end",function(){console.log(dataRs.length);console.log(dataRs);});
  response.on("error",function(error){console.error();});
}
