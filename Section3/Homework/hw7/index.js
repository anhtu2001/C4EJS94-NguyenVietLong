console.log('Ex7');
const arr = [3, 4, 6, -9, 10, -88, 2];
let num = Number(prompt("Enter a number"));
let found = false;
for (let i = 0; i < arr.length; i++) {
    if(num == arr[i]){
        alert(num + " is found in my array at index " + i);
        found = true;
        break;
    }
}
if(!found){
    alert(num + " is NOT found in my array");
}