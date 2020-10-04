function hello() {
    let a = 'Hello world';
    alert(a);
}
hello();

function hi(name, comment){
    alert('Hi ' + name);
    alert(`${name}, ${comment}`);
}

hi('Nam', 'function is great');
hi('Duyen', 'You look great');

function hi(name){
    alert('Hi ' + name);
    alert(`${name}, Function is great`);
}

let x = hi;
x('Hello');

function sayHi(name) {
    alert('Hi ' + name);
}

function sayGoodbye(same) {
    alert('Goodbye ' + same);
}

function testSay(f) {
    alert('What I say');
    f();
}
sayHi('Long');
sayGoodbye('Son');
testSay(sayHi);
testSay(sayGoodbye);

let h1 = document.getElementById('heading-1');
h1.addEventListener('click', function(){
    console.log("Clicked");
})

let name = document.getElementById('name');
let create = document.getElementById('create');
create.addEventListener('click', function(){
    let a = prompt('Input name:');
    console.log(a);
    name.innerHTML += a;
})

let myInput = document.getElementById('my-input');
// myInput.addEventListener('keypress', function(){
//     console.log("Inputting...");
// })
//Parameter
// myInput.addEventListener('keypress', function(data){
//     console.log(data);
// })

myInput.addEventListener('keypress', function(data){
    name.innerHTML += data;
})
