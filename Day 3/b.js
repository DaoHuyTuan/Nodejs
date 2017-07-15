

function Point(x,y){
    this.x = x;
    this.y = y;

}
function Line(diemA,diemB,point){
    this.diemA = diemA;
    this.diemB = diemB;
    this.point = point;
    this.getLenght = function(){
        const dx = this.diemA.x - this.diemB.x;
        const dy = this.diemA.y - this.diemB.y;
        return Math.sqrt(dx * dx + dy * dy);
       
    }
}
function ChuViTamGiac(pointA , pointB, pointC){
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;
    this.Tinhtoan = function(){
        const l1 = new Line(this.pointA, this.pointB);
        const l2 = new Line(this.pointA, this.pointC);
        const l3 = new Line(this.pointB, this.pointC);
        return l1.getLenght() + l2.getLenght() + l3.getLenght();
    }
}
const pA = new Point(1,5);
const pB = new Point(2,7);
const LineAB = new Line(pA,pB);
console.log(LineAB.getLenght());