const soDong = 5;
const soCot = soDong * 2 - 1 ;

for(let i = 1 ;i<= soDong;i++){
    let str = '';
    let k = 1 ;
    for(let j =1;j <= soCot;j++){
        
    }
}

//function return function 
function getlog(){
    return console.log;
}
getlog()(100);
// function get parameter a function
function dotSth(a){
    a(123); // console.log(123);
}
dotSth(console.log);