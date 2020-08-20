console.log('How many legs does a spider have?');
console.log('1. None');
console.log('2. 4 legs');
console.log('3. 8 legs');
console.log('4. 12 legs');

while(true){
    let legs = Number(prompt('Enter Your choice'));
    if(legs == 1){
        alert('Good luck next time');
    }
    else if(legs == 2){
        alert('Good luck next time');
    }
    else if(legs == 3){
        alert('Bravo, you are correct');
        break;
    }else if(legs == 4){
        alert('Good luck next time');
    } 
    else {
        alert('Invalide choice, the answer must be 1, 2, 3 or 4');
    }
}