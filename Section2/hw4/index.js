let number = prompt("Enter a number");
let s = 1;
for (let index = 1; index <= number; index++) {
    s *= index;
}
alert("The factorial of " + number + " is " + s);