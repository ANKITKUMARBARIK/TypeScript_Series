// type inference
let username = "wickdev"; // ts infers the type as string

// type assertions
let someValue: any = "not found";
let strLength: number = (someValue as string).length;

console.log(strLength);

//
function getValue(): any {
    return "Hello, TypeScript!";
}

let strLen: number = (getValue() as string).length;
console.log(strLen);
