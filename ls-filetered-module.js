var mymodule=require("./module/mymodule.js");
function callback(err,data){
  if (err) return console.error(err);
  data.forEach(function(data){console.log(data);});
}
mymodule(process.argv[2],process.argv[3],callback);
