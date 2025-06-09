// any
let resAny: any;
resAny = 12;
resAny = "admin";

// unknown -> not sure, which type will come
let resUnknown: unknown;
resUnknown = 13;
resUnknown = "user";

if (typeof resUnknown == "string") resUnknown.toUpperCase();

// never
function resNever(): never {
    // do something endlessly
    while (true) {
        console.log("something went wrong");
    }
}
resNever();
console.log("end");
