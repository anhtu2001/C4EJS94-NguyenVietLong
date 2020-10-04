

function findOppositeNumber(n, inputNumber) {
    for(let i = 0; i <= inputNumber; inputNumber <= n - 1){
        if(inputNumber < 0 || inputNumber > n - 1) {
            alert("fail, enter again!");
        }else{
            inputNumber += 5;
        }
    }
}

