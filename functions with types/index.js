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
// regular function
function someAdd(num1, num2) {
    return num1 + num2;
}
console.log(someAdd(2, 3));
// function expression
const someDivide = function (num1, num2) {
    return num1 / num2;
};
console.log(someDivide(8, 2));
// arrow function
const someMultiply = (num1, num2) => {
    return num1 * num2;
};
console.log(someMultiply(8, 2));
// optional parameters
function someGreet(username, greeting) {
    return `${greeting ? greeting : "unknown"} ${username}`;
}
console.log(someGreet("admin"));
// default parameters
function someGreeted(username, greeting = "unknown") {
    return `${greeting} ${username}`;
}
console.log(someGreeted("admin"));
function getLength(value) {
    return value.length;
}
console.log(getLength("morning"));
console.log(getLength([10, 20, 30]));
// Rest Parameter
function someSum(...numbers) {
    return numbers.reduce((pre, curr) => pre + curr, 0);
}
console.log(someSum(10, 20, 30, 40, 50));
function someStr(greeting, ...words) {
    words.forEach((word) => console.log(`${greeting} ${word}`));
}
someStr("good", "morning", "devs", "whats", "going", "on");
// Callback function
function someCall(name, age, cb) {
    console.log(`${name} & ${age}`);
}
someCall("devin", 19, () => {
    console.log("Dear GPT");
});
function someCalled(name, cb) {
    console.log(name);
    cb("hey there");
}
someCalled("devin", (value) => {
    console.log("Dear GPT", value);
});
