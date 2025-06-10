"use strict";
// union
let rate;
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");
// type narrowing
function printId(id) {
    if (typeof id === "string") {
        console.log("String ID:", id.toUpperCase());
    }
    else {
        console.log("Number ID:", id.toFixed(2));
    }
}
printId("chinu123");
printId(101.456);
function vibe(obj) {
    console.log(obj.email);
    console.log(obj.name);
    console.log(obj.isVerified);
    console.log(obj.getDetails("twitter"));
}
const obj1 = {
    student_id: 3232,
    name: "rita",
    Teacher_Id: 7873,
    teacher_name: "seema",
};
console.log(obj1.Teacher_Id);
console.log(obj1.name);
