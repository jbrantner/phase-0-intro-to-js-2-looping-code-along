function writeCards(name) {
    let newArray = [];
     for (let i = 0; name.length > i; i++) {
         newArray.push((`Thank you, ${name[i]}, for the wonderful surprise gift!`))
     }
     return newArray;
 }

 function countDown(num) {
    while ( num >= 0) {
        console.log(num);
        num--;
  
    }
 }