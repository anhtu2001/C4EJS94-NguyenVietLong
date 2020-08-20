console.log('Ex5');
let str = prompt("Enter a sequence of numbers separated by commas(,)");
let a = str.split(",").map(Number);
let sum = 0;
for (let index = 0; index < a.length; index++) {
   sum += Number(a[index]);
}
alert("The sum of them is " + sum);
//5,6,7,9,12,-9