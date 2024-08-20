'use strict'
 
const appData = {
    week: [],

    start: function () {
        appData.allDays()
    },

    allDays: function () {
        appData.week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        const currentDay = new Date().getDay()  
        const container = document.createElement ("div")
        
        appData.week.forEach(function(day, index) {
            const dayElement = document.createElement("p")
            if (index === currentDay){
                dayElement.style.fontWeight = "bolder"
            }

            if (index === 0 || index === 6){
                dayElement.style.fontStyle = "italic"
            }

            dayElement.textContent = day
            container.appendChild(dayElement)
            
        })

        document.body.appendChild(container)
    }
}
appData.start()







