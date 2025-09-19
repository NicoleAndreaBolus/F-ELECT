// Grade Average Calculator - Activity
// September 19, 2025

// const studentName = "John";

// Grade scores in different subjects
// let sub1 = 86;
// let sub2 = 90;
// let sub3 = 87;
// let sub4 = 94;
// let sub5 = 91;

// let total = sub1 + sub2 + sub3 + sub4 + sub5;
// let average = total / 5;

// console.log(studentName + "'s General Weighted Average is " + average);

// In prompt

const studentName = prompt("Enter Student Name: ");

// Grade scores in different subjects
let sub1 = parseFloat(prompt("Enter score for Subject 1: "));
let sub2 = parseFloat(prompt("Enter score for Subject 2: "));
let sub3 = parseFloat(prompt("Enter score for Subject 3: "));
let sub4 = parseFloat(prompt("Enter score for Subject 4: "));
let sub5 = parseFloat(prompt("Enter score for Subject 5: "));
let total = sub1 + sub2 + sub3 + sub4 + sub5;
let average = total / 5;

console.log(studentName + "'s General Weighted Average is " + average);