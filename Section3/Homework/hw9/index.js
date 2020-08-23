console.log('Ex9');  
let fsize = 50;
let i = 0;
let colors = ["red", "gray", "blue", "purple", "cyan"];
while(i<colors.length){
 color(colors[i]);
  for(let j = 0;j < 4;j ++){
    fd(fsize+=20);
    rt(90);
  }
  i++;
}