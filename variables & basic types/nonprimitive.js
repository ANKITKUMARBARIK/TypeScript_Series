"use strict";
// any
let resAny;
resAny = 12;
resAny = "admin";
// unknown
let resUnknown;
resUnknown = 13;
resUnknown = "user";
if (typeof resUnknown == "string")
    resUnknown.toUpperCase();
// null
let resNull;
resNull = null;
// undefined
let resUndefined;
resUndefined = undefined;
// never
function resNever() {
    while (true) { }
}
resNever();
console.log("end");
