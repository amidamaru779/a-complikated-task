const num = 266219
// создал переменную со значением number
const digits = Array.from(String(num), Number);
// преобразовал тип number в тип string
console.log(digits);
// вывел массив 
const mult = digits[0]*digits[1]*digits[2]*digits[3]*digits[4]*digits[5];
/* поиндексно перемножил между собой каждый элемент массива 
и занес в новую переменную */
console.log(mult);
// вывел в консоль произведение цифр 

