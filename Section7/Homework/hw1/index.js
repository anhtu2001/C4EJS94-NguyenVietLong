const container = document.getElementById('list');
for(let i = 0; i < 3; i++){
    container.insertAdjacentHTML("beforeend",`<li>${i}</li>`);
}
console.log(container);
console.log('The correct answer is beforeend');