// Interface - using interfaces to define object shapes
interface Bike {
    brand: string;
    engine: number;
}

const myBike: Bike = {
    brand: "Yamaha",
    engine: 150,
};

//
interface User {
    name: string;
    age: number;
    status: boolean;
}

const getData = (obj: User) => {
    console.log(obj.name);
};

getData({ name: "admin", age: 19, status: true });

function getDataFunc(obj: User) {
    console.log(obj.name);
}

getDataFunc({ name: "admin", age: 19, status: true });

// extending interfaces
interface Unknown {
    name: string;
    email: string;
    password: number;
}

interface Admin extends Unknown {
    accessToken: string;
    refreshToken?: string;
}

const testInter: Admin = {
    name: "sar",
    email: "ankitbarik.dev@gmail.com",
    password: 123,
    accessToken: "rbbfsisubdubsdjbj",
    // refreshToken: "gjbuguhefgeghfefb",
};
console.log(testInter);

// merge interfaces --> (imp...bcoz it doesn't overwrite)
interface Trial {
    name: string;
}
interface Trial {
    email: string;
    password: number;
}

function testTri(obj: Trial) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.password);
}

// Type alias - usng Type alias to create types or union
type Car = {
    brand: string;
    model: string;
    year: number;
};

const myCar: Car = {
    brand: "Tata",
    model: "Nexon",
    year: 2022,
};
console.log(myCar);

//
type Value = string | boolean | number;

let serial: Value = "done";

const demoTask = (str: Value) => {
    console.log(str);
};
demoTask("admin");
