var net=require("net");
var date=dateFormat(new Date());
var server=net.createServer(callback);
server.listen(process.argv[2]);
function callback(socket){
  socket.end(date);
}
function dateFormat(date){
  return date.getFullYear()+"-"+
  (date.getMonth()+1<10?"0"+(date.getMonth()+1).toString():date.getMonth()+1)+"-"+
  (date.getDate()<10?"0"+date.getDate():date.getDate())+" "+
  (date.getHours()<10?"0"+date.getHours():date.getHours())+":"+
  (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+"\n";
}
/**¹Ù·½´ð°¸
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
**/
