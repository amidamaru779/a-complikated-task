// Создаем переменную num со значением 266219
let num = 266219;

// Умножаем цифры числа
let multiplication = 1;
while (num > 0) {
    multiplication *= num % 10;
    num = Math.floor(num / 10);
} console.log(multiplication);
