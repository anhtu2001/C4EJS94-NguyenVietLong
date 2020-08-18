alert('Home work');

console.log('Ex1');
//1
console.log('Cases that give you SyntaxError invalid variable names are: \n'
    + '1. Variable names is a keyword\n'
    + '2. Variable names start with a number\n'
    + '3. Variable names contain special characters');
console.log('For example: \n'
    + '1: let let = "abc"\n'
    + '2: let 1st = "first"\n'
    + '3: let #F = 1');
//2
console.log('In JavaScript, we use "typeof" check a variable data types \n' +
    'The typeof operator returns the type of the argument.\n' +
    'It’s useful when we want to process values of different types differently.');

console.log('Ex2');
console.log('1-b, 2-a, 3-e, 4-c');

console.log('Ex3');
//a
let message = 'Coding is great'
console.log(message);
//b
let studentCount = 0;
console.log(studentCount);

console.log('Ex4');
//a
message = 'Coding might not be easy, but still great';
console.log(message);
//b
studentCount = 16;
console.log(studentCount);
//c
console.log(message.toLowerCase());
//d
console.log(studentCount + 1);

console.log('Ex5');
alert('You look beauiful today');

console.log('Ex6');
let x = prompt('Hi there, your name please?');
alert("Hi " + x);

console.log('Ex7');
let firstname = prompt('Enter your first name');
let lastname = prompt('Enter your last name');
alert("Hi " + lastname + ' ' +firstname);

console.log('Ex8');
let length = prompt('Enter size length of the square');
alert("The square area is " + (length * length));

console.log('Ex9');
let rad = prompt('Enter radius of the cicrle');
let area = parseFloat(Math.pow(rad,2) * Math.PI).toFixed(1);
alert("The cicrle area is " + area);

console.log('Ex10');
let clecius = prompt('Enter the temperature in Clecius');
alert(clecius + ' (C) = ' + parseFloat(1.8 * clecius + 32).toFixed(1) + ' (F)');

