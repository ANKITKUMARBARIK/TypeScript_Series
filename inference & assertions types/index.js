"use strict";
// type inference
let username = "wickdev"; // ts infers the type as string
// type assertions
let someValue = "not found";
let strLength = someValue.length;
console.log(strLength);
//
function getValue() {
    return "Hello, TypeScript!";
}
let strLen = getValue().length;
console.log(strLen);
