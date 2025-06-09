class Student {
    name: string;
    age: number;
    status: boolean;

    constructor(name: string, age: number, status: boolean = false) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greet(): string {
        return `username: ${this.name} & age: ${this.age} - ${this.status}`;
    }
}

const s1 = new Student("admin", 19);
console.log(s1.greet());
console.log(s1.name);

//
class GameChanger {
    firstName: string;
    private lastName: string = "dev";
    protected nickName: string = "bot";

    constructor(firstName: string) {
        this.firstName = firstName;
    }

    first() {
        return `first name: ${this.firstName} ${this.lastName} ${this.nickName}`;
    }
}

class GraphicChanger extends GameChanger {
    mode: string;
    contrast: number;

    constructor(firstName: string, mode: string, contrast: number) {
        super(firstName);
        this.mode = mode;
        this.contrast = contrast;
    }

    second() {
        return `first name: ${this.firstName}, mode: ${this.mode}, contrast: ${this.contrast} - parent class: ${this.nickName}`;
    }
}

const g1 = new GraphicChanger("admin", "high", 80);
console.log(g1.first());
console.log(g1.second());

/*
access modifiers (public, private, protected)
public: Accessible from anywhere. This is the default if no modifier is specified.
private: Accessible only within the class.
protected: Accessible within the class and its • subclasses.
*/

// Abstract classes and methods
abstract class Shape {
    abstract getArea(): number; //abstract method must be implemented by subclasses

    printArea(): void {
        console.log(`the area is ${this.getArea()}`);
    }
}
class Rectangle extends Shape {
    constructor(private height: number, private weight: number) {
        super();
    }

    getArea(): number {
        return this.height * this.weight;
    }
}

const r1 = new Rectangle(6, 3);
r1.printArea();
const rr1 = r1.getArea();
console.log(rr1);

// Getters and Setters
// -> In TypeScript, getters and setters provide controlled access to class properties, enhancing encapsulation and flexibility.
class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    // Getters allow you to retrieve the value of a property with controlled logic
    get radius(): number {
        return this._radius;
    }

    // Setters enable controlled assignment to properties, often including validation or transformations.
    set radius(value: number) {
        if (value < 0) throw new Error("radius must be positive");
        this._radius = value;
    }
}

const gs = new Circle(10);
console.log(gs.radius); // get
gs.radius = 20; //set
console.log(gs.radius); // get

// Static members & methods
// -> A static variable is shared across all objects. Only one copy of the static member exists in memory, no matter how many objects you create. You access static members using the class name, not via the object.
class Scarface {
    static ability: number = 200;
    static click: number = 0;

    constructor() {
        Scarface.click++;
    }

    static getRandom(): number {
        return Math.random() + 62;
    }

    static count(): number {
        return Scarface.click;
    }
}

console.log("ability: ", Scarface.ability);
console.log("random: ", Scarface.getRandom());
const c1 = new Scarface();
const c2 = new Scarface();
const c3 = new Scarface();
console.log("Total Click: ", Scarface.count());
