'use strict'
 
const allDays = function () {
    let week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    alert(String(week))
    
    for (let i = 0; i < week.length; i++){
        if (week[i] === "Воскресенье" || week[i] === "Суббота" ){
            week [i]= `<i>${week[i]}</i>`;
        }
        let currentDay = new Date().getDay()
        if (i === currentDay){
            week[i] = `<b>${week[i]}</b>`
        }
        console.log(week[i]); 
       
    }
}
allDays()




