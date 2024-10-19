console.log("Well Come scripting or lightweight programming language");
let ageOfStudent=21;
console.log(ageOfStudent);
console.log(typeof(ageOfStudent));
let studentName="sagar";
console.log(studentName);
console.log(typeof(studentName));
let isPassed=true;
console.log(isPassed);
console.log(typeof(isPassed));
let first_Name;
console.log(first_Name);
console.log(typeof(first_Name));
let last_Name=null;
console.log(last_Name);
console.log(typeof(last_Name));

// blocked scope function
function solve() {
    let birds="Animal";
    console.log(birds);
    
}
// console.log(birds);// birds is not defined

solve();

// global scope elements
// var a=25;
// var a=23;
// let b=28;
// b=27;
function name(){
return 2+5;

}
// console.log(a);
// console.log(b);
console.log(name());

// function sagar() {
//     let book_Name="English";
//     let pen_Name="shredhar cce";
//     console.log(book_Name);
//     console.log(pen_Name); 
// }
// sagar();


// const pavan=document.getElementById("demo");
// pavan.addEventListener("click",()=>{
// let surName="gothi";
// let nickName="chinnu";
// console.log(surName);
// console.log(nickName);

// })

// conditional statements
let age=15;
if (age > 18){
    console.log("Your are eligibule for vote");
    
}else if (age > 21){
    console.log("Your are also teenage ");
    
}else if (age <= 10){
    console.log("Your are equll");
    
}else{
    console.log("This is a one of the method");
    
}
console.log("write any one here");


// example 2
let x=20;
let y=21;

if(x > y && x >= y){
    console.log("This is a first method");
    
}else if(x < y && y <= x){
    console.log("Right Answear");
    
}else{
    console.log("always write this one");
    
}
console.log("this is write the any one");


// example 3

let a=10;
let b=12;
if(a > b && a <= b){
    console.log("this is AND method");
    
}else if(a > b || a <= b){
    console.log("this is OR method");
    
}else if(a !== b){
    console.log("this is a NOT method");
    
}else{
    console.log("here write any one always");
    
}

// ternary operators

let student_age=21;
student_age == 20 ? console.log("your are write answer") : console.log("you are not correct answer");

// example 2

let number = 143;
number > 200 ? console.log("your are correct") : console.log("your are not equall to 200");

// example 3

let is_Passed = 38;
is_Passed > 36 ? console.log("You got the marks 36 your passed") : console.log("you got the below 36 marks . your are filled");

// loops

for(let i=0; i <= 10; i++){
    console.log("i",i);
    
}

// example 2

for(let j=1; j <= 10; j = j+2){
    console.log(j);
    
}
// example 3
 for(let x=0; x<=10; x++){
    if( x % 2 == 0){
        console.log( x);
        
    }
    
 }
//  example 4
for(let y=0; y<=100; y++){
    if(y % 2 !== 0){
        console.log(y);
        
    }
}
// example 5
 for(let a=1; a <= 20; a++){
    if(a % 2 != 0){
        console.log("a","=",a);    
    }
 }

//  example 6
for(let b=1; b <= 20; b++){
    if(b % 2 == 0){
        console.log("2","*","=",b);
        
    }
}








