class Point {
    constructor(x,y){
        this.x = x ;
        this.y = y;
    }
}
class Line{
    constructor(pointA ,pointB){
        this.pointA = pointA;
        this.pointB = pointB;

    }
    getLenght(){
        const dx = this.diemA.x - this.diemB.x;
        const dy = this.diemA.y - this.diemB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    Triangle(pointA,pointB,pointC){
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
}
