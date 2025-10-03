// ARRAY - LIST OF DATA


console.log("     ARRAY OF DATA      ");
console.log("-----------------------");

let names = ["Colin", "James", "Carlo", "Mark", "Vince"];
let number = [5, 10, 15, 20];

// alert(names);
// alert(number);


// alert(names[1]); 
// alert(number[3]);

console.log(names.length); // length of array - count of items in array
console.log(names[2]);
console.log(names[4]);
// console.log(names[5]); // undefined - no value

console.log(names);

// UPDATING ARRAYS

//SYNTAX
// identifer[index] = new value

//Example
let cars = ["Yaris", "Innova"];
cars[1] = "Fortuner"; // updating innova to fortuner
cars[2] = "BMW"; // adding new item to array
console.log(cars);

// Updating names array

names[0] = "Gabby";
names[3] = "Calvin"; // Replacing Mark to Calvin
console.log(names);

// Push and Unshift - adding new item to array
// Push - adding new item at the end of array
// unshift - adding new item at the beginning of array
names.push("Andrea");
names.unshift("Peter"); // adding Peter at the beginning of array
console.log(names);

// Pop and Shift - removing item from array
names.pop(); // removing last item from array
names.shift(); // removing first item from array
console.log(names);

// Slice
names=names.slice(0,2);
console.log(names); // starting index, ending index (not included)
// why gabby and james only?
// because starting index is 0 (gabby) and ending index is 2 (not included) so only gabby and james will be displayed


let ID = [1001, 1002, 1003]
let Lastname = ["Santos", "Villa", "Marzan"]
let Fname = ["Lance", "Kevin", "Mark"]
let Salary = [20000, 25000, 30000]

console.log("ID No: " + ID[0]);
console.log("Lastname: " + Lastname[0]);
console.log("Fname: " + Fname[0]);
console.log("Salary: " + Salary[0]);


