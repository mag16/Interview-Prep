/* Classes are template for creating objects.  They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

*/

// Declaration
class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
    return this.calcArea();
    }

    //Method
    calcArea() {
        return this.height * this.width;
    }

    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

const square = new Rectangle(10,10);

console.log(square.area);
console.log([...square.getSides()])