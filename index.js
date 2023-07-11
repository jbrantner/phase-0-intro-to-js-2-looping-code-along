


function writeCards(names) {
    let message = [];
    for (let i = 0; i < names.length; i++) {
    let array = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    message.push(array);
    }
    return message; 
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
        
    }
   

};
