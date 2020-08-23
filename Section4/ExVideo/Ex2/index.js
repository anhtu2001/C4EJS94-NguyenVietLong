//Ex1
//a:
let movie = {
    title: 'The dark night rises',
    year: 2012,
    rate: 8.4,
};

//cach 1.
console.log(movie.title);
//cach 2.
console.log(movie['title']);
//b:
console.log(movie.director);
console.log('Log an non-existent property of the movie is director');
console.log('result is undefined');

//Ex2
let movie2 = ['Sport', 'LOL', 'BTS'];
console.log(movie2);
movie2.push('Game');
console.log(movie2);
for(let i = 0; i < movie2.length; i++){
    movie2[i] = movie2[i].toUpperCase();
}
console.log(movie2);

//Ex3
let movie3 = {
    title: 'The dark night rises',
    year: 2012,
    rate: 8.4,
};
let option;
while(true){
    option = prompt('What you want to know?').toLocaleLowerCase();
    if(option == 'title'){
        alert(movie3['title']);
    }else if(option == 'year'){
        alert(movie3['year']);
    }else if(option == 'rate'){
        alert(movie3['rate']);
    }else{
        alert("'" + option + "'" + ' does not exist in our data');

    }
}