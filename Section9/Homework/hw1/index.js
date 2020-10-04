//ways 1
// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("Promise is da best"), 5000);
// });
// promise.then(
//     result => alert(result),
//     error => alert(error)
// );

//ways 2
// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise is da best"), 5000);
// })
// .finally(() => alert("Promise ready"))
// .then(result => alert(result));

let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve("Promise is da best"), 5000);
});

async function Result() {
    let x = await promise;
    alert(x);
}

Result();