console.log('Ex6');
let str = prompt('Enter a sequence of number, separated by ","');
let a = str.split(",");
// let min = Number(a[0]);
// for (let i = 0; i < a.length; i++) {
//     if(min > Number(a[i])){
//         min = Number(a[i]);
//     }
// }
// alert("The smallest number is "+ min);
alert("The smallest number is " + Math.min.apply(Math,a));