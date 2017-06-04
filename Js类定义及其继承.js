//动态原形---类定义
function Triangle(a,b,c){
	this.a=a;
	this.b=b;
	this.c=c;
	this.angles=new Array(30,60,90);
	if(Triangle._initialized==undefined){
		Triangle.prototype.circumference=function(){
			return a+b+c;
		}
		Triangle._initialized=true;
	}
}

var tirangle=new Triangle(1,2,3);
var t2=new Triangle(10,16,20);
//alert(tirangle.circumference());
//alert(t2.circumference());

//继承
function Rectangle(length,height){
	this.length=length;
	this.height=height;	
}
Rectangle.prototype.area=function(){
	alert(length*height);
}
//-----子类------
function Square(side){
	Rectangle.call(this,side,side);
	this.name="正方形";
}
Square.prototype=new Rectangle();
Square.prototype.sayName=function(){
	alert(this.name);
}
//---使用---
var square=new Square(30);
square.sayName();
square.area();	// Uncaught ReferenceError: height is not defined 书本p96
var sq2=new Square(10);
sq2.area();
