//Object containing array
let person = {
    name: 'Nam',
    age: 18,
    favs: ['Neeflix', 'Cafe', 'Code'],
};

// console.log(person.favs[1]);
let favs = person.favs;
console.log(favs);
for(let i=0; i<favs.length; i++){
    console.log(favs[i]);
}
favs.push('Macbook');
console.log(favs);

console.log(person);