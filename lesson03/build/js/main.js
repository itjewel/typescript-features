"use strict";
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
// console.log(guitars, "test1");
guitars.unshift("Jim");
// console.log(guitars, "test2");
let test = [];
let bands = [];
bands.push("jewel");
// Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
myTuple[1] = 455;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    active: true,
    albums: ["I", "II", "IV", "i am here"],
    name: "jewelfarazi",
};
// console.log(jp, "jewel");
const greetGuitarist = (guitarist) => {
    console.log(guitarist, "j");
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}! ${typeof guitarist.albums[3] === "string"
            ? guitarist.albums[3].toUpperCase()
            : "No Album"}`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U, Grade.A);
