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
