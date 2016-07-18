console.log(function(){
  var processV=process.argv,sum=0;
  for (var i = 2; i < processV.length; i++) {
    sum+=+processV[i];
  }
  return sum;
}());
