// Создаем переменную num со значением 266219
let num = 266219;

// Умножаем цифры числа
let multiplication = 1;
while (num > 0) {
    multiplication *= num % 10;
    num = Math.floor(num / 10);
} console.log(multiplication);

// Возводим результат в степень 3
 let result = multiplication ** 3 

// Первые две цифры числа
let firstTwoDigits = result.toString()
console.log(firstTwoDigits.slice(0,2));
