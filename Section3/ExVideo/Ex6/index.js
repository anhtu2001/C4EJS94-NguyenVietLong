let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
console.log(movie);
let n = movie.length;

console.log('a:');
for(let i = 0; i < n; i++){
    console.log(movie[i]);
}

console.log('b:');
for(let i = 0; i < n/2; i++){
    console.log(movie[i]);
}

console.log('c:');
for(let i = 0; i < n; i++){
    console.log((i + 1) + '. ' + movie[i]);
}