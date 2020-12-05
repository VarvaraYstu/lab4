var x0 = prompt('Введите начальное значение х','');
var x_ = prompt('Введите конечное значение х','');
var step = prompt('Введите шаг','');
x0 = Number(x0);
x_ = Number(x_);
step = Number(step);
var y;
for (var i = x0 ; i <= x_ ; i=i+step) {
	y = Math.pow(i,2) + Math.pow(i,3) -3*i;
  alert ('х='+ i + ' y=' + y)
}