// keyof
interface Danger {
    name: string;
    age: number;
    email: string;
}

type wat = keyof Danger;

let keys: wat = "email";

// utility types
interface Devops {
    name: string;
    age: number;
    email: string;
}

// const updateUser = (user: Devops): void=>{
//     console.log(user.name)
// }

const updateUser = (user: Partial<Devops>): void => {
    console.log(`${user.name} ${user.email} ${user.age}`);
};

updateUser({ name: "admin" });
updateUser({ email: "admin.dev@gmail.com" });
updateUser({ age: 19 });

//
type UserRec = Partial<Devops>;
// type UserRec = Devops

let userDev: UserRec = {
    name: "admin",
};

// Required
interface Cube {
    name?: string;
    age: number;
    email: string;
}

type Mantor = Required<Cube>;
// type UserRec = Devops

let mentor: Mantor = {
    name: "admin",
    age: 19,
    email: "admin.dev@gmail.com",
};

// Readonly
interface React {
    name?: string;
    age: number;
    email: string;
}

type Vite = Readonly<React>;

let frame: Vite = {
    // name: "admin",
    age: 19,
    email: "admin.dev@gmail.com",
};
// frame.age = 20

// Pick
interface Supra {
    name?: string;
    age: number;
    email: string;
}

type bike = Pick<Supra, "name" | "email">;
// type bike = Supra

let motor: bike = {
    name: "admin",
    // age: 19,
    email: "admin.dev@gmail.com",
};

// Omit
interface Grocery {
    name?: string;
    age: number;
    email: string;
}

type product = Omit<Grocery, "name" | "email">;
// type product = Grocery

let credit: product = {
    // name: "admin",
    age: 19,
    // email: "admin.dev@gmail.com",
};

// Record
interface Social {
    name?: string;
    age: number;
    email: string;
}

type media = Record<string, string | number>;
// Record<string, string | number> -> <key, value | value>

let twitX: media = {
    name: "admin",
    age: 19,
    email: "admin.dev@gmail.com",
};

// Exclude
// -> use to remove the type from union types
type Stat = "success" | "error" | "loading";

type excErr = Exclude<Stat, "error">;
// type excErr = Stat;

const stat1: excErr = "loading";
// const stat2:excErr = "error"

// Extract
// -> use to extract the type from union types
type Minus = "success" | "error" | "loading";

type excMin = Extract<Minus, "error">;
// type excMin = Minus;

const exc1: excMin = "error";
// const exc2:excMin = "loading"

// NonNullable
type MaybeUser = null | undefined | string;
type userNull = NonNullable<MaybeUser>;

const useNull: userNull = "ok";
// const useNull:userNull = undefined

// ReturnType
function getType() {
    return { name: "admin", age: 19 };
}

type userReturnType = ReturnType<typeof getType>;

// const userType:userReturnType = {
//     name: "ai-dev",
// }

const userType: userReturnType = {
    name: "ai-dev",
    age: 19,
};

// Parameters
function updateUserData(name: string, age: number) {
    console.log(`${name}, ${age}`);
}

type UpdateUserParams = Parameters<typeof updateUserData>;

const params: UpdateUserParams = ["Men", 201];

// ContructorParameters
class UserCData {
    constructor(public name: string, public age: number) {}
}
type UserContructorParams = ConstructorParameters<typeof UserCData>;

const userCParams: UserContructorParams = ["Boy", 10];
