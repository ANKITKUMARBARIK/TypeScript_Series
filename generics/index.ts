/*
    -> Generics are way to create components (functions, classes or interfaces) that work with different types without losing type safety.
*/

// generic functions
function logger<T>(data: T): T {
    return data;
}
// console.log(logger<string>("hey"))
// logger<number>(12)
// logger<boolean>(true)
console.log(logger("hey").toUpperCase());
console.log(logger<number>(404));
console.log(logger(true));

// "deep dive" -> ✅ String Literal ❌ String  -- in TypeScript
function logging<T>(data: T): T {
    if (typeof data === "string") console.log(data.toUpperCase());
    return `${data}` as T;
    // return <T>`${data}`;
}
console.log(logging("deep dive logic"));

// generic interfaces
interface Cookie<T> {
    username: string;
    pass: number;
    role: string;
    key: T;
}

function someDemo(obj: Cookie<string>): void {
    console.log(`${obj.key} ${obj.username}`);
}
someDemo({ username: "foo", pass: 321, role: "USER", key: "fdbiudufs05fs" });

interface keyPair<T, U> {
    accessToken: T;
    refreshToken: U;
}

let someToken: keyPair<string, number> = {
    accessToken: "bhbfsdfi88556bk",
    refreshToken: 6464567490,
};
console.log(
    `access: ${someToken.accessToken}, refresh: ${someToken.refreshToken}`
);

// generic classes
class Designer<T> {
    constructor(key: T) {
        console.log(key);
    }
}

const d1 = new Designer<string>("fsdfb885jf");
const d2 = new Designer<number>(234);

// generic constraints
function getLength<T extends { length: number }>(name: T): number {
    return name.length;
}
console.log(getLength<string>("winter"));
console.log(getLength<number[]>([10, 20, 30]));
