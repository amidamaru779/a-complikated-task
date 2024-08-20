'use strict'

// Формат (a)
function formatDateA() {
    const date = new Date();
    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  
    const weekday = weekdays[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const hourWord = getHourWord(hours);
  
    return `Сегодня ${weekday}, ${day} ${month} ${year} года, ${hours} ${hourWord} ${minutes} минут ${seconds} секунд`;
}
  
// Формат (b)
function formatDateB() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
}
  
// Функция для склонения слова "час"
  function getHourWord(hours) {
    const remainder = hours % 10;
    if (hours === 1 || (hours > 20 && remainder === 1)) {
      return 'час';
    } else if ((hours >= 2 && hours <= 4) || (hours > 20 && (remainder >= 2 && remainder <= 4))) {
      return 'часа';
    } else {
      return 'часов';
    }
}
  
// Вывод на страницу
console.log(formatDateA());
console.log(formatDateB());
 
function updateTime() {
    const dateTimeA = document.getElementById('date-time-a');
    const dateTimeB = document.getElementById('date-time-b');
  
    dateTimeA.textContent = formatDateA();
    dateTimeB.textContent = formatDateB();
}
  
setInterval(updateTime, 1000);