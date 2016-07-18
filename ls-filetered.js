var fs=require("fs"),path=require("path");
function callback(err,data){
  var conditional="."+process.argv[3];
  for (var i = 0; i < data.length; i++) {
    if (path.extname(data[i])!=conditional) {
      data.splice(i,1);
      i--;
    }else {
      console.log(data[i]);
    }
  }

}
fs.readdir(process.argv[2],callback);
