"use strict";
let keys = "email";
// const updateUser = (user: Devops): void=>{
//     console.log(user.name)
// }
const updateUser = (user) => {
    console.log(`${user.name} ${user.email} ${user.age}`);
};
updateUser({ name: "admin" });
updateUser({ email: "admin.dev@gmail.com" });
updateUser({ age: 19 });
// type UserRec = Devops
let userDev = {
    name: "admin",
};
// type UserRec = Devops
let mentor = {
    name: "admin",
    age: 19,
    email: "admin.dev@gmail.com",
};
let frame = {
    // name: "admin",
    age: 19,
    email: "admin.dev@gmail.com",
};
// type bike = Supra
let motor = {
    name: "admin",
    // age: 19,
    email: "admin.dev@gmail.com",
};
// type product = Grocery
let credit = {
    // name: "admin",
    age: 19,
    // email: "admin.dev@gmail.com",
};
// Record<string, string | number> -> <key, value | value>
let twitX = {
    name: "admin",
    age: 19,
    email: "admin.dev@gmail.com",
};
// type excErr = Stat;
const stat1 = "loading";
// type excMin = Minus;
const exc1 = "error";
const useNull = "ok";
// const useNull:userNull = undefined
// ReturnType
function getType() {
    return { name: "admin", age: 19 };
}
// const userType:userReturnType = {
//     name: "ai-dev",
// }
const userType = {
    name: "ai-dev",
    age: 19,
};
// Parameters
function updateUserData(name, age) {
    console.log(`${name}, ${age}`);
}
const params = ["Men", 201];
// ContructorParameters
class UserCData {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const userCParams = ["Boy", 10];
