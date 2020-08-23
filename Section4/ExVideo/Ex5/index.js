let movie1 = {
    title: 'Stars war',
    year: 2009,
    rate: 9.0,
};

let movie2 = {
    title: 'Ironman',
    year: 2010,
    rate: 9.1,
};

let movie3 = {
    title: 'Magic of tower',
    year: 2015,
    rate: 7.2,
};
//Ex1
let movies = [];
// Ex2
movies.push(movie1);
console.log(movies);
// Ex3
movies.push(movie3);
console.log(movies);
// delete movie3.title;
// console.log(movies);
//Ex4
movies.push(movie2);
console.log(movies);
for(let i = 0; i < movies.length; i++){
    let p = movies[i];
    console.log(p);
}
//Ex5
for (let index = 0; index < movies.length; index++) {
    console.log("--------------------------");
   console.log(movies[index].title);
   console.log(movies[index].year);
   console.log(movies[index].rate);
   
}
//Ex6
console.log("Change rate");
console.log(movies[movies.length-1].rate);
movies[movies.length-1].rate += 0.7;
console.log(movies[movies.length-1].rate);