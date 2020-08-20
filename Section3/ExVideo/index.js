console.log('Ex1');

console.log('a. My favorite movie');
let movie = ['Star wars', 'Ironman', 'Batman'];
console.log(movie);

console.log('b. ');
let newItem = prompt('Enter new Item');
movie.push(newItem);
console.log(movie);

console.log('c. ');
let index = prompt('Enter number index');
console.log(movie[index]);

console.log('d1. ');
let i = 0;
let movieTitle = prompt('Enter movie Title');
movie[i] = movieTitle;
console.log(movie);

console.log('d2. ');
let movieIndex = prompt('Enter movie Title');
console.log(movie[movieIndex]); 