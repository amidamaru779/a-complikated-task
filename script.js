// через if 
let lang = prompt('На каком языке вы хотите увидеть дни недели?', 'ru,en');
let russianDaysOfTheWeek = "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";
let englishDaysOfTheWeek = "Monday, Thuesday, Wednesday, Thurday, Friday, Saturday, Sunday";

if (lang === "ru") {
    console.log(russianDaysOfTheWeek);
} else if (lang === "en") {
    console.log(englishDaysOfTheWeek);
} else {
    console.log("Неизвестный язык");
}

// через switch
switch (lang) {
    case "ru":
        console.log(russianDaysOfTheWeek);
        break
    case "en":
        console.log(englishDaysOfTheWeek);
        break
    default:
        console.log("Неизвестный язык");
}
        
// switch второй вариант
switch (true) {
    case lang === "ru":
        console.log(russianDaysOfTheWeek);
        break
    case lang === "en":
        console.log(englishDaysOfTheWeek);
        break
    default:
        console.log("Неизвестный язык");
}

// без if и switch
let daysOfWeek = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thueday', 'Friday', 'Saturday', 'Sunday']
};
  console.log(daysOfWeek[lang]);

  
        

