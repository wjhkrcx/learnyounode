var fs=require("fs");
function callback(err,data){
  console.log(data.split("\n").length-1);
}
fs.readFile(process.argv[2],"utf-8",callback);
/**Лђеп
fs.readFile(process.argv[2],"utf-8",function(err,data){console.log(data.split("\n").length-1);});
**/
