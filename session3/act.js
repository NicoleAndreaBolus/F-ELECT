// Write a JavaScript program that will tell the remarks of the given input salary

/*
Salary:
80,001 - Above = Aba Mayaman!
65,001 - 80,000 = You are very hard working
50,001 - 65,000 = You are hardr working
35,001 - 50,000 = You are doing good
20,001 - 35,000 = You work enough
10,001 - 20,000 = nice job!
10,000 - below  + please work hard
other input = invalid entry
*/

let salary = prompt("Enter your salary: ");
let remarks = "";

if (salary > 80000) {
    remarks = "Aba Mayaman!";
} else if (salary >= 65001 && salary <= 80000) {
    remarks = "You are very hard working";
} else if (salary >= 50001 && salary <= 65000) {
    remarks = "You are hard working";
} else if (salary >= 35001 && salary <= 50000) {
    remarks = "You are doing good";
} else if (salary >= 20001 && salary <= 35000) {
    remarks = "You work enough";
} else if (salary >= 10001 && salary <= 20000) {
    remarks = "Nice job!";
} else if (salary <= 10000 && salary >= 0) {
    remarks = "Please work hard";
} else {
    remarks = "Invalid Entry!";
}
alert("Your remarks is: " + remarks);
console.log("Your remarks is: " + remarks);


