
// Triangle.prototype = new Shape();
// Square.prototype = new Shape();
// Pentagon.prototype = new Shape();

// Triangle.prototype.constructor = "Triangle";
// Square.prototype.constructor = "Square";
// Pentagon.prototype.constructor = "Pentagon";

function Shape(){

	this.type = function get_type(){
		return this.constructor;
	};   
};

 function Triangle(side1, side2, side3){

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
		
};

function Square(side1, side2, side3, side4){

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	

};

function Pentagon(side1, side2, side3, side4, side5){

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
	

};

Triangle.prototype = new Shape();
Square.prototype = new Shape();
Pentagon.prototype = new Shape();

Triangle.prototype.constructor = "Triangle";
Square.prototype.constructor = "Square";
Pentagon.prototype.constructor = "Pentagon";

var triangle = new Triangle(3, 3, 5);
var square = new Square(3, 3, 3, 3);
var pentagon = new Pentagon(4, 4, 4, 4, 4);

console.log(triangle.type());
console.log(square.type());
console.log(pentagon.type());


