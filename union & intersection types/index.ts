// union
let rate: string | null;

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

// type narrowing
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log("String ID:", id.toUpperCase());
    } else {
        console.log("Number ID:", id.toFixed(2));
    }
}

printId("chinu123");
printId(101.456);

// intersection
type credential = {
    name: string;
    email: string;
};

type role = credential & {
    isVerified: boolean;
    getDetails(user: string): void;
};

function vibe(obj: role) {
    console.log(obj.email);
    console.log(obj.name);
    console.log(obj.isVerified);
    console.log(obj.getDetails("twitter"));
}

//
interface Student {
    student_id: number;
    name: string;
}

interface Teacher {
    Teacher_Id: number;
    teacher_name: string;
}

type intersected_type = Student & Teacher;

let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    Teacher_Id: 7873,
    teacher_name: "seema",
};

console.log(obj1.Teacher_Id);
console.log(obj1.name);
