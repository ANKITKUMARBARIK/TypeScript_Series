// void -> no return type
function abcd(): void {
    console.log("tokens");
}
abcd();

// mention return type
function efgh(): string {
    return "tokens";
}
efgh();

const resFun = (num1: number, num2: number): number => {
    return num1 + num2;
};
let found: number = resFun(12, 14);
console.log(found);

function resFunc(num1: number, num2: string): void {
    console.log(num1 + num2);
}
resFunc(12, "14");

// regular function
function someAdd(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(someAdd(2, 3));

// function expression
const someDivide = function (num1: number, num2: number): number {
    return num1 / num2;
};
console.log(someDivide(8, 2));

// arrow function
const someMultiply = (num1: number, num2: number): number => {
    return num1 * num2;
};
console.log(someMultiply(8, 2));

// optional parameters
function someGreet(username: string, greeting?: string): string {
    return `${greeting ? greeting : "unknown"} ${username}`;
}
console.log(someGreet("admin"));

// default parameters
function someGreeted(username: string, greeting: string = "unknown"): string {
    return `${greeting} ${username}`;
}
console.log(someGreeted("admin"));

// function overloading
function getLen(value: string): number;
function getLen(value: any[]): number;
function getLen(value: any): number {
    return value.length;
}

console.log(getLength("morning"));
console.log(getLength([10, 20, 30]));

// Rest Parameter
function someSum(...numbers: number[]): number {
    return numbers.reduce((pre, curr) => pre + curr, 0);
}
console.log(someSum(10, 20, 30, 40, 50));

function someStr(greeting: string, ...words: string[]): void {
    words.forEach((word) => console.log(`${greeting} ${word}`));
}
someStr("good", "morning", "devs", "whats", "going", "on");

// Callback function
function someCall(name: string, age: number, cb: () => void): void {
    console.log(`${name} & ${age}`);
}

someCall("devin", 19, () => {
    console.log("Dear GPT");
});

function someCalled(name: string, cb: (value: string) => void) {
    console.log(name);
    cb("hey there");
}

someCalled("devin", (value: string) => {
    console.log("Dear GPT", value);
});
