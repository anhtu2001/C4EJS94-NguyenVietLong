let movie = {
    title: 'Marvel',
    year: 2009,
    rate: 9.0,
    characters: ['Ironman', 'Thor', 'Hulk'],
};
let movie1 = {
    title: 'Mind hunter',
    year: 2017,
    rate: 8.6,
    characters: ['Holden', 'Bill'],
};
let movie2 = {
    title: 'Unabomber',
    year: 2016,
    rate: 8.1,
    characters: ['Ted'],
};
let movies = [];
movies.push(movie);
movies.push(movie1);
movies.push(movie2);
//Ex2
for (let index = 0; index < movies.length; index++) {
    console.log("-------------");
    console.log(movies[index].title);
    console.log(`Year : ${movies[index].year}`);
    console.log(`rate : ${movies[index].rate}`);
    console.log(`Casts : ${movies[index].characters}`);
}