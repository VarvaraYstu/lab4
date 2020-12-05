var array=['акробат','апостроф','артикль'];
var k=0;
for (var i=0; i<=2;i++){
for(var j=0;j<=array[i].length;j++){
if (array[i].charAt(j)=='а'){k=k+1}
}
}
alert(k);