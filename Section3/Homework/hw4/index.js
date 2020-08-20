console.log('Ex4');
let shop;
let items = ['Jeans', 'T-Shirt', 'Socks'];
let n = items.length;
while(true){
    shop = prompt("Hi there, welcome to shop admin panel, What do you want(C, R, U, D)").toLowerCase();
    if(shop == 'r'){
        let str = "The current items are :\n";
        for (let index = 0; index < n; index++) {
            str +=` ${index + 1} . ${items[index]} \n`; 
        }
        alert(str);
    }else if(shop == 'c'){
        let newItem = prompt("Enter the name of new item");
        items.push(newItem);
        alert("Done");
    }else if(shop == 'u'){
        let index = Number(prompt("Enter position you want to update"));
        let updateItem = prompt("Enter the new name");
        items[index-1] = updateItem;
        alert("Done");
    }else if(shop == 'd'){
        let index = Number(prompt("Enter the position you want to delete"));
        items.splice((index-1),1);
        alert("Done");
    }else{
        alert("This command is not supported");
    }
}