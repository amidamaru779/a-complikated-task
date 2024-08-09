'use strict'

const userInput = prompt("Пожалуйста введите 30 любых символов","")
const txt = function(arg) {
    
    if (typeof arg !== "string") {
        return "Пожалуйста введите строку"
    }  
    const trimArg = arg.trim();
    if (trimArg.length > 30) {
        return trimArg.slice(0,31) + "..." 
    }
    return trimArg
    
}
console.log(txt(userInput));




