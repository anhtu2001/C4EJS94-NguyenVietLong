//Object Update
let person = {
    name: 'Nam',
    age: 19,
};
console.log(person);
//cach 1
// person.name = 'Nguyen Phuong Nam';
// console.log(person);
//cach 2
person['age'] = 20;
console.log(person);

person.age++;
console.log(person);
//tuong tu person.[age++];