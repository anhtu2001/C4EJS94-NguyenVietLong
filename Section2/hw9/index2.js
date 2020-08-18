  
console.log("b. n L’s and H’s in total, n entered by user");
let lowerNumber = 0;
let higherNumber = 0;
let inputNumber = Number(prompt("Enter a number"));

for (let i = 0; i < inputNumber; i++) {
    if (i < inputNumber/2) {
        lowerNumber +=1;
    } else {
        higherNumber +=1;
    }
}
console.log(lowerNumber + `L`);
console.log(higherNumber + `H`);