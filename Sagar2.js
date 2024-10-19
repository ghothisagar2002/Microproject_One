console.log("Heloo well come to javascript");
// Data types
let age = 21;
console.log(age);
console.log(typeof (age));

// data types
let name = "What is your name";
console.log(name);
console.log(typeof (name));

// data types
let isPassed = true;
console.log(isPassed);
console.log(typeof (isPassed));

// data types
let undefind;
console.log(undefind);
console.log(typeof (undefind));

// data types
let no_Value = null;
console.log(no_Value);
console.log(typeof (no_Value));

// data types
var ageOfStudent = 18;
var ageOfStudent = 10;
console.log(ageOfStudent);
console.log(typeof (ageOfStudent));


// data types
let student_name = "gothi";
student_name = "Bardaval";
console.log(student_name);
console.log(typeof (student_name));

// data types
const pi = 3.12345;
console.log(pi);
console.log(typeof (pi));

// conditional statements
let salary = 50;
if (salary > 100) {
    console.log("Print the 100");
} else if (salary >= 200) {
    console.log("print 200");
} else if (salary == 300) {
    console.log("print 300");
} else if (salary <= 80) {
    console.log("print lessthan 80");

} else {
    console.log("This is print the always");

}
console.log("this is out side print always any one write always printed");

// example 2
let monthlySalary = 100;
let monthlySaving = 50;
if (monthlySalary > monthlySaving && monthlySalary <= monthlySaving) {
    console.log("First statement is correct");
} else if (monthlySalary < monthlySaving || monthlySalary >= monthlySaving) {
    console.log("Second statemet is correct");

} else if (monthlySalary < monthlySaving != monthlySalary > monthlySaving) {
    console.log("True is print False and False is print True");

} else {
    console.log("Always");

}
// additional operators
let x = 20;
let y = 35;
let z = x + y;
console.log(z);

let num1 = 10;
let num2 = 20;
let res = num1 - num2;
console.log(res);

let num3 = 10;
let num4 = 3;
let ress = num3 * num4;
console.log(ress);

let num5 = 20;
let num6 = 3;
let resu = num5 / num6;
console.log(resu);

let num7 = 20;
let num8 = 11;
let resua = num7 % num8;
console.log(resua);

// assignment operators

let sagar = 2;
sagar += 6;
console.log(sagar);

let sagar2 = 10;
sagar2 += 20;
console.log(sagar2);

let sagar1 = 20;
sagar1 -= 10;
console.log(sagar1);

let sagar3 = 20;
sagar3 *= 10;
console.log(sagar3);

let sagar4 = 20;
sagar4 /= 5;
console.log(sagar4);
let sagar5 = 30;
sagar5 %= 4;
console.log(sagar5);

// functions
function myFun() {
    console.log("Hello Good Morning every one");

}
myFun();
myFun();
myFun();

// 2nd method
function myFun1(userName) {
    console.log("My name is " + userName);

}
myFun1("sagar");
myFun1("gothi");

// 3rd method
function myFun2(name = "sagar", surname = "bardaval", age = 22) {
    return name + surname + age;

}
let u1 = myFun2("jagadish ", "gothi ", 16);

console.log(u1);

// 3rd method 
function myFun3(a, b) {
    return a + b;
}
let output = myFun3(5, 10);
console.log(output);

function myFun4(x, y) {
    return x - y;
}
let subtract = myFun4(6, 2);
console.log(subtract);

function Sagar143() {
    console.log("Well come to javascript"); 
    console.log("Radha swami ji");
      
}
function Gothi(male) {
    male();
}
Gothi(Sagar143);







