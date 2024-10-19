// Basic javascript
console.log("Hello well come to new world");
console.log("This is javascript programming language");

// variables
var age = 20;
console.log(age);

// example 2
var age_Of_Student = 35;
var age_Of_Student = 22;
console.log(age_Of_Student);

// example 3
var num = 143;
num = 123;
console.log(num);

// example 4
let sagarAge = 18;
console.log(sagarAge);

// example 5
// let gothiAge=432;
// let gothiAge=123;
// console.log(gothiAge); already declared the gothiAge

// example 6
let example = 6;
example = 9;
console.log(example);

// example 7
const pi = 3.142;
console.log(pi);

// example 8
// const example8 = 321;
// const example8= 123;
// console.log(example8);

// example 9
// const teeth =2123;
// teeth = 1234;
// console.log(teeth);

// Data types
let student_name = "sagar";
console.log(student_name);
console.log(typeof (student_name));

// number type
let student_RollNo = 143;
console.log(student_RollNo);
console.log(typeof (student_RollNo));

// Boolean values
let is_Passed = true;
console.log(is_Passed);
console.log(typeof (is_Passed));

let is_Fail = false;
console.log(is_Fail);
console.log(typeof (is_Fail));

// undifind
let roll_Number;
console.log(roll_Number);
console.log(typeof (roll_Number));

// null value
let nice_Name = null;
console.log(nice_Name);
console.log(typeof (nice_Name));

// operators
// additional operators
let x = 2;
let y = 6;
console.log(x + y);

let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);
// subtraction

let num3 = 19;
let num4 = 7;
console.log(num3 - num4);

let num5 = 19;
let num6 = 5;
let subtract = num5 - num6;
console.log(subtract);

// Multiply

let mul = 2;
let mul2 = 5;
console.log(mul * mul2);

let mult = 12;
let mult2 = 43;
let multiplay = mult * mult2;
console.log(multiplay);

// Division
let divi = 10;
let divi2 = 45;
console.log(divi / divi2);

let divis = 56;
let divis2 = 98;
let Division = divis / divis2;
console.log(Division);

// Moduloos
let mod = 76;
let mod2 = 56;
console.log(mod % mod2);

// powers
let len = 2;
let len2 = 4;
console.log(len ** len2);

// Assignment operators
let z = 10;
z += 15;
console.log(z);

let p = 20;
p -= 12;
console.log(p);

let q = 20;
q *= 2;
console.log(q);

let r = 43;
r /= 3;
console.log(r);

let m = 143;
m %= 123;
console.log(m);

// conditional operatrors
let over = 12;
let you = 70;
if (over > you) {
    console.log("over");
} else if (over >= you) {
    console.log("over equal to");

} else if (over < you) {
    console.log("you");

} else if (over <= you) {
    console.log("you greater than equall to");

} else {
    console.log("Always printed");

}

let pavan_Age = 20;
switch (pavan_Age) {
    case (pavan_Age > 18):
        console.log("10");
        break;
    case (pavan_Age > 11):
        console.log("11");
        break;
    case (pavan_Age > 12):
        console.log("12");
        break;
    case (pavan_Age > 13):
        console.log("13");
        break;
    case (pavan_Age > 14):
        console.log("14");
        break;

    default:
        console.log("always");

        break;
}

// logical operators

let log = 32;
let log1 = 65;
if (log > log1 && log >= log1) {
    console.log("AND Operators");

} else if (log < log1 && log != log1) {
    console.log("Correct Answer");

} else {
    console.log("always");

}

// OR operators
let or = 45;
let or2 = 54;
if (or <= or2 || or >= or2) {
    console.log("First one correct");

} else if (or > or2 || or < or2) {
    console.log("Second one correct ");

} else {
    console.log("always");

}


// NOT operators

// let mere_sath = 143;
// if (mere_sath > 543 != mere - sath < 50) {
//     console.log("first");

// }

// loops

for (let i = 0; i <= 20; i++) {
    console.log("i", i);

}

// method 2

for (let j = 0; j < 20; j++) {
    if (j > 15) {
        console.log("15");
        break;

    }
    console.log("j", "=", j);

}

// functions
function sagar() {
    console.log("Well come to Functions method");
    
}
sagar();

function sagar1(name) {
    console.log("my name is "+name);
    
}
// sagar1("sagar")
let res=sagar1("gothi");
console.log(res);


// method 3

function sagar2(name="sagar",age=22) {
    return name + age ;

}
let u1 =sagar2("pavan ",19);

let u2 =sagar2("jagadish ",23)
console.log(u1,u2);













