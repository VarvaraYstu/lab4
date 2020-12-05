var sum=0;
var arr = new Array (5);
for (var i=0; i<arr.length; i++){
	arr[i]=Math.random() * (100 - 0) + 0;
  sum = sum+ Math.pow(arr[i],2);
}
alert (sum);