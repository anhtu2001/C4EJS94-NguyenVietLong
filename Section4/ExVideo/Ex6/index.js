//Ex1
let movie = {
    title: 'Marvel',
    year: 2009,
    rate: 9.0,
    characters: ['Ironman', 'Thor', 'Hulk'],
};
console.log(movie);
//Ex2
console.log(movie.title);
console.log('Year: ' + movie.year);
console.log('Rate: ' + movie.rate);
console.log(`Casts: ${movie.characters}`);
//Ex3
let character = movie.characters;
character.push('Captain America');
console.log(movie.title);
console.log('Year: ' + movie.year);
console.log('Rate: ' + movie.rate);
console.log(`Casts: ${movie.characters}`);