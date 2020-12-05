var a = prompt('введите коэффициент а', '');
var b = prompt('введите коэффициент b', '');
var c = prompt('введите c', '');
var x1,x2,D;
if (a!=0) {
D = (Math.pow(b,2) - (4*a*c));
if (D>0) {
	x1 = (-b- Math.sqrt(D))/(2*a);
  x2 = (-b+ Math.sqrt(D))/(2*a);
  alert ('Корни уравнения равны '+ x1 +' И '+ x2);  
}
if (D==0) {
x1 = (-b)/(2*a);
alert ('корень уравнения равен '+ x1);
} 
if (D<0) {
alert ('Корней нет.')
}}
else {
alert ('Введите корректное значение а.')
}