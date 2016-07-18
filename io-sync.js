var path=process.argv[2];
var fs=require("fs");
var content=fs.readFileSync(path,'utf-8');
var str=content.split('\n');
console.log(str.length-1);
