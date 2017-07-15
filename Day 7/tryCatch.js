try {
    console.log(a);
}catch(e){
    console.log("co loi " + e );

}
console.log("try catch");

function getSqrt(x){
    if(x<0) throw new Error("x ko the nho hon 0");
    return Math.sqrt(x);
}
try{
    console.log(getSqrt(-100));
}catch(e){
    console.log(e);
}
