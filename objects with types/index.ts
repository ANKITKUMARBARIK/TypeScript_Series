const resObj: { name: string; age: number } = {
    name: "admin",
    age: 30,
};

// defining type
type Editor = {
    name: string;
    age: number;
    isAdmin: boolean;
};

let user1: Editor = {
    name: "John",
    age: 21,
    isAdmin: true,
};
