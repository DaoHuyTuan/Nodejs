// const sinhVien = {
//     ten  : 'tuan',
//     tuoi : 12,
//     car: {
//         brand: 'BMW',
//         weight: 100
//     }
// };
// console.log(sinhVien.car.brand);
//class 
function Car(brand,year){
    this.brand = brand;
    this.year  = year;

}
function SinhVien(ten,tuoi,car){
    this.name = ten;
    this.age = tuoi;
    this.car = car;
    this.HelloTuan = function(){
        console.log("hello " + this.name);
    }
    this.increAge = function(){
        this.age++;

    }
}
const car1 = new Car('honda', 1995);

const tuan = new SinhVien('badman',22,car1);


console.log(tuan.car.year);