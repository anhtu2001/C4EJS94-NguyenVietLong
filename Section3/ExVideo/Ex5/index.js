console.log('My favorite movies');
let movie = ['Star wars', 'Ironman', 'Batman'];
console.log(movie);

console.log('a:');
let Delete = prompt('You can be choose location in list movie to delete');
movie.splice(Delete,1);
console.log(movie);

console.log('b:');
let deletes = prompt('You can be choose location in list movie to delete');
let item = prompt('Enter long of array do you want delete');
movie.splice(deletes,item);
console.log(movie);
