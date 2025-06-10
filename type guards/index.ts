// guards with typeof
function printID(id: number | string) {
    if (typeof id === "string") {
        console.log("ID is string: ", id);
    } else {
        console.log("ID is number: ", id);
    }
}

// guards with instanceof
class Dog1 {
    bark() {
        console.log("Woof!");
    }
}

class Cat1 {
    meow() {
        console.log("Meow!");
    }
}

function handlePet(pet: Dog1 | Cat1) {
    if (pet instanceof Dog1) {
        pet.bark();
    } else {
        pet.meow();
    }
}

let doggy = new Dog1();
let citty = new Cat1();
handlePet(doggy);
handlePet(citty);

// custom type guards
interface Moon {
    swim(): void;
}
interface Star {
    fly(): void;
}

function isMoon(galaxy: Moon | Star): galaxy is Moon {
    return (galaxy as Moon).swim() !== undefined;
}

function move(galaxy: Moon | Star) {
    if (isMoon(galaxy)) {
        galaxy.swim();
    } else {
        galaxy.fly();
    }
}

//
//agar ye function true return kare, toh samajh le ki value ab string hai.
function isString(value: any): value is string {
    return typeof value === "string"; // return true or false
}
console.log(isString(23));
console.log(isString("hello"));

function checkType(value: string | number) {
    if (isString(value)) {
        console.log("value is string:", value.toUpperCase()); // TypeScript knows it's string now
    } else {
        console.log("value is number"); // Else it's definitely number
    }
}

checkType("dear");
checkType(56);
