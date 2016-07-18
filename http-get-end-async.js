var http=require("http"),httppackage=require("httppackage"),
url1=process.argv[2],url2=process.argv[3],url3=process.argv[4];
httppackage.httpGetAsyncBackSync(url1,url2,url3,callback);
function callback(err,data){
  data.forEach(function(file){console.log(file);});
}
