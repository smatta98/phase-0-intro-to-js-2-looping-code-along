// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"];
event = 'surprise'

function writeCards(names, event){
    let messages = [];
    for(let i = 0;i<names.length; i++){
    
     messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(num){
    let i = num; 
    while (i>= 0) {
console.log(i--)
    }
   
}