//Array of object
//- Complex data that Object or Array alone cannot efficiently store
//- For example:
//- List of User
//- User is favorite list
//- Both of the above combined

//-3 ways to combine
// Array of Object
// Object containing Array
// 2 of the above combined

let person1 = {
    name: 'Nam',
    age: 18,
};

let person2 = {
    name: 'Duc',
    age: 24,
};

let personArr = [];

console.log(personArr);
personArr.push(person1);
personArr.push(person2);
console.log(personArr);

// console.log(personArr[0]);
// let p = personArr[0];

// console.log(p);
// console.log(p.name);
// console.log(personArr[0].name);
// let n = personArr[0].name;
// console.log(n);
let p = personArr.length;
for(let i = 0; i < personArr.length; i++){
    let p = personArr[i];
    console.log(p);
    console.log(p.age);
}
