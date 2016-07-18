var fs=require("fs"),path=require("path");
function lsfiletermodule(directory,conditional,callback){
  function datacallback(err,data){
    if (err) return callback(err,data);
    conditional="."+conditional;
    data=data.filter(function(data){return path.extname(data)===conditional;});
    return callback("",data);
  }
  fs.readdir(directory,datacallback);
}
module.exports = lsfiletermodule;
