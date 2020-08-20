while(true){
    let name = prompt('Register an unsername');
    if(name.l <= 15){
        alert('Good username');
        break;
    }else{
        alert('Your username is too long');
    }
}