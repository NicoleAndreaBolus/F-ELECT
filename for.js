/* Output:
5 10 15
10 20 30
15 30 45
20 40 60
25 50 75
30 60 90
*/
for (let i = 1; i <= 6; i++) {
    let a = i * 5;
    let b = i * 10;
    let c = i * 15;
    console.log(a, b, c);
}


/*Array
Output:
 StudID:
 Lname:
 Fname:
 Tuition:
 Payment:

*/

let StudID = [1001, 1002, 1003, 1004];
let Lname = ["Vinuya", "Santos", "David", "Sagum"];
let Fname = ["Lanie", "Jude", "Mike", "Dennis"];
let Tuition = [10000, 20000, 30000, 40000];
let Payment = [5000, 4000, 3000, 2000];

// console.log("Student ID: " + StudID[0] + "\n" + "Last name: " + Lname[3] + "\n" + "First name: " + Fname[0] + "\n" + "Tuition: " + Tuition[3] + "\n" + "Payment: " + Payment[0] + "\n" + "Balance: " + (Tuition[3] - Payment[0]) + "\n");


console.log("Student ID: " + StudID[0]); //0 - 3
console.log("Last name: " + Lname[3]); // 3 - 0
console.log("First name: " + Fname[0]); //0 - 3
console.log("Tuition: " + Tuition[3]); //3 - 0
console.log("Payment: " + Payment[0]); //0 - 3
console.log("Balance: " + (Tuition[3] - Payment[0]));

console.log("\n");

console.log("Student ID: " + StudID[1]); //0 - 3
console.log("Last name: " + Lname[2]); // 3 - 0
console.log("First name: " + Fname[1]); //0 - 3
console.log("Tuition: " + Tuition[2]); //3 - 0
console.log("Payment: " + Payment[1]); //0 - 3
console.log("Balance: " + (Tuition[2] - Payment[1]));

console.log("\n");

console.log("Student ID: " + StudID[2]); //0 - 3
console.log("Last name: " + Lname[1]); // 3 - 0
console.log("First name: " + Fname[2]); //0 - 3
console.log("Tuition: " + Tuition[1]); //3 - 0
console.log("Payment: " + Payment[2]); //0 - 3
console.log("Balance: " + (Tuition[1] - Payment[2]));

console.log("\n");

console.log("Student ID: " + StudID[3]); //0 - 3
console.log("Last name: " + Lname[0]); // 3 - 0
console.log("First name: " + Fname[3]); //0 - 3
console.log("Tuition: " + Tuition[0]); //3 - 0
console.log("Payment: " + Payment[3]); //0 - 3
console.log("Balance: " + (Tuition[0] - Payment[3]));