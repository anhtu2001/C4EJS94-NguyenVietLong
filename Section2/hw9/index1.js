console.log("Ex9");
console.log("a. 6 L’s and H’s, half L’s, half H’s.");
let lowerNumber = 0;
let higherNumber = 0;

for (let i = 0; i < 6; i++) {
    if (i < 6/2) {
        lowerNumber +=1;
    } else {
        higherNumber +=1;
    }
}
console.log(lowerNumber + `L`);
console.log(higherNumber + `H`);