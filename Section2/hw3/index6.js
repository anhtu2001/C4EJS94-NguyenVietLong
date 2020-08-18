console.log("f. starting from c, ending before n, stepping by s");
let c = prompt("Enter c");
let n = prompt("Enter n");
let s = prompt("Enter s");

for(let index = parseInt(c); index < parseInt(n); index += parseInt(s)){
    console.log(index);

}