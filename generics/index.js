"use strict";
/*
    -> Generics are way to create components (functions, classes or interfaces) that work with different types without losing type safety.
*/
// generic functions
function logger(data) {
    return data;
}
// console.log(logger<string>("hey"))
// logger<number>(12)
// logger<boolean>(true)
console.log(logger("hey").toUpperCase());
console.log(logger(404));
console.log(logger(true));
// "deep dive" -> ✅ String Literal ❌ String  -- in TypeScript
function logging(data) {
    if (typeof data === "string")
        console.log(data.toUpperCase());
    return `${data}`;
    // return <T>`${data}`;
}
console.log(logging("deep dive logic"));
function someDemo(obj) {
    console.log(`${obj.key} ${obj.username}`);
}
someDemo({ username: "foo", pass: 321, role: "USER", key: "fdbiudufs05fs" });
let someToken = {
    accessToken: "bhbfsdfi88556bk",
    refreshToken: 6464567490,
};
console.log(`access: ${someToken.accessToken}, refresh: ${someToken.refreshToken}`);
// generic classes
class Designer {
    constructor(key) {
        console.log(key);
    }
}
const d1 = new Designer("fsdfb885jf");
const d2 = new Designer(234);
// generic constraints
function getLength(name) {
    return name.length;
}
console.log(getLength("winter"));
console.log(getLength([10, 20, 30]));
