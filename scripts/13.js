let names=prompt ('Введите имена студентов через запятую');
let comm=',';
let array= names.split(comm);
let i = 0;
while (i<array.length){
alert(array[i])
i++
}