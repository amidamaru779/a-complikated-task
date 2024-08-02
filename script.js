const num = 266219
// создал переменную со значением number
const digits = Array.from(String(num), Number)
// преобразовал тип number в тип string
console.log(digits);
// вывел массив 
const mult = digits[0]*digits[1]*digits[2]*digits[3]*digits[4]*digits[5];
/* поиндексно перемножил между собой каждый элемент массива 
и занес в новую переменную */
console.log(mult);
// вывел в консоль произведение цифр 

const pow = mult**3;
/* в новой переменной произвел возведение в 3 степень 
результат переменной mult через оператор "**" */
console.log(pow);
// вывел в консоль произведение цифр в 3 степени 

const firstdigit = Array.from(String(pow));
// создал новую переменную в которой преобразовал результат pow в массив
console.log(firstdigit[0],firstdigit[1]);
// вывел первые два элемента массива поиндексно