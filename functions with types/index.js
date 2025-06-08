"use strict";
// void -> no return type
function abcd() {
    console.log("tokens");
}
abcd();
// mention return type
function efgh() {
    return "tokens";
}
efgh();
const resFun = (num1, num2) => {
    return num1 + num2;
};
let found = resFun(12, 14);
console.log(found);
function resFunc(num1, num2) {
    console.log(num1 + num2);
}
resFunc(12, "14");
