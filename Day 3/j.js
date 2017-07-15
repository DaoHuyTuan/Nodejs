class Person {
    constructor(ten , tuoi , kl ){
        this.ten = ten;
        this.tuoi = tuoi;
        this.kl = kl;
    }
    
}
//arrow function //
const arrPerson = [
    new Person('tuan','22','23'),
    new Person('badman','32','233'),
    new Person('miracle','52','263')
];
arrPerson.forEach((e,i) => console.log(i + 1 + ' xin chào toi là ' + e.ten) );
const isTallEnough = arrPerson.some(e =>  e.tuoi > 30)
console.log(isTallEnough);
function checkExist(arrPerson,isTallEnough){
    for(let i = 0; i <arrPerson.lenght; i++){
        if(checkExist(arrPerson[i])) return true;
    }
    return false;
}
console.log(checkExist(arrPerson,e => e.tuoi > 30));

function filter(arrAny,filterFunction){
    const arrResult = [];
   arrAny.forEach (e=> filterFunction(e) ? arrResult.push(e) : null);
}
console.log(filter(arrPerson , e => e.tuoi > 14));

const arr = arrPerson.filter(e => e.tuoi > 14)
    console.log(arr);
const e = arrPerson.find(e => e.ten === 'miracle')
console.log(e);
