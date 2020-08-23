let movie = {
    title: 'The dark night rises',
    year: 2012,
    rate: 8.4,
};

//Ex1
// console.log(movie['rate']);
// movie.rate = 8.7;
// console.log(movie['rate']);
// movie.rate = movie.rate + 0.5;
// console.log(movie['rate']);

//Ex2
let option = prompt('What you want to update?');
let update = prompt('What is the update?');
movie[option] = update; 
console.log(movie);