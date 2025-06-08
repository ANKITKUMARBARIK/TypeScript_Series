"use strict";
const myBike = {
    brand: "Yamaha",
    engine: 150,
};
const getData = (obj) => {
    console.log(obj.name);
};
getData({ name: "admin", age: 19, status: true });
function getDataFunc(obj) {
    console.log(obj.name);
}
getDataFunc({ name: "admin", age: 19, status: true });
const testInter = {
    name: "sar",
    email: "ankitbarik.dev@gmail.com",
    password: 123,
    accessToken: "rbbfsisubdubsdjbj",
    // refreshToken: "gjbuguhefgeghfefb",
};
console.log(testInter);
function testTri(obj) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.password);
}
const myCar = {
    brand: "Tata",
    model: "Nexon",
    year: 2022,
};
console.log(myCar);
let serial = "done";
const demoTask = (str) => {
    console.log(str);
};
demoTask("admin");
