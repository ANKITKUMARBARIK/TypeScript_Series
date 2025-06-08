// any
let resAny;
resAny = 12;
resAny = "admin";

// unknown
let resUnknown: unknown;
resUnknown = 13;
resUnknown = "user";

if (typeof resUnknown == "string") resUnknown.toUpperCase();

// null
let resNull: null;
resNull = null;

// undefined
let resUndefined: undefined;
resUndefined = undefined;

// never
function resNever(): never {
    while (true) {}
}
resNever();
console.log("end");
