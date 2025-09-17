// FREE - ELECTIVE || SEPTEMBER 17, 2025

// WRITE A JAVASCRIPT PROGRAM THAT WILL COMPUTE THE SALARY OF THE THREE GIVEN EMPLOYEES.
// COMPUTE THEIR TOTAL TAXES AND NET INCOME.



const employee1 = "Mark";
const employee2 = "June";
const employee3 = "Maria";

const taxRate = 0.10;

console.log("Salary Computation");
console.log("Given Employees: " + employee1 + ", " + employee2 + ", " + employee3);

// Input day rates for each employee 
let emp1DayRate = parseFloat(prompt("Enter day rate for " + employee1 + ":"));
let emp2DayRate = parseFloat(prompt("Enter day rate for " + employee2 + ":"));
let emp3DayRate = parseFloat(prompt("Enter day rate for " + employee3 + ":"));

// Input work days for each employee 
let emp1WorkDays = parseInt(prompt("Enter work days for " + employee1 + ":"));
let emp2WorkDays = parseInt(prompt("Enter work days for " + employee2 + ":"));
let emp3WorkDays = parseInt(prompt("Enter work days for " + employee3 + ":"));

// Compute salaries
let emp1TotalSalary = emp1DayRate * emp1WorkDays;
let emp2TotalSalary = emp2DayRate * emp2WorkDays;
let emp3TotalSalary = emp3DayRate * emp3WorkDays;

console.log(`Therefore, ${employee1} total salary is ${emp1TotalSalary}`);
console.log(`Therefore, ${employee2} total salary is ${emp2TotalSalary}`);
console.log(`Therefore, ${employee3} total salary is ${emp3TotalSalary}`);

// Compute tax for each employee
let emp1TaxAmount = emp1TotalSalary * taxRate;
let emp2TaxAmount = emp2TotalSalary * taxRate;
let emp3TaxAmount = emp3TotalSalary * taxRate;

console.log(`${employee1}'s tax amount is: ${emp1TaxAmount}`);
console.log(`${employee2}'s tax amount is: ${emp2TaxAmount}`);
console.log(`${employee3}'s tax amount is: ${emp3TaxAmount}`);

// Compute totals
let totalTaxes = emp1TaxAmount + emp2TaxAmount + emp3TaxAmount;
let totalNetIncome =
  (emp1TotalSalary - emp1TaxAmount) +
  (emp2TotalSalary - emp2TaxAmount) +
  (emp3TotalSalary - emp3TaxAmount);

console.log("Therefore, their total tax amount is: " + totalTaxes);
console.log("Therefore, their total net income is: " + totalNetIncome);


// Net Income Breakdown
console.log("Net Income Breakdown:");
console.log(`${employee1}'s net income is: ${emp1TotalSalary - emp1TaxAmount}`);
console.log(`${employee2}'s net income is: ${emp2TotalSalary - emp2TaxAmount}`);
console.log(`${employee3}'s net income is: ${emp3TotalSalary - emp3TaxAmount}`);
