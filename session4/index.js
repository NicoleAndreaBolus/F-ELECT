// For loop in JavaScript
/*
- For loop
- While loop
- Do while loop
*/

/* Use when you know exactly how many times you want to execute a statement or a block of statements.
----STRUCTURE----

for (initialization; condition; increment/decrement) {
    // code block to be executed
}

*/


// PARTS of a for loop
/*
1. Initialization: executed once the loop starts.
2. Condition: evaluated before each iteration. If true, the loop continues; if false, the loop ends.
3. Increment/Decrement: executed after each iteration.

*/


// Example:

for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}


// Output:
/*
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
*/

// Most Common Use Cases
/*
1. Iterating over arrays
2. Generating sequences of numbers
3. Repeating actions a specific number of times
4. Nested loops for multi-dimensional data
*/


for(m=6; m<=186; m=(m*2)+6){
    console.log(m);     
}


//ALT
for(i=1; i<=186; i++)
 i=i+2;
 i=i*2;
 i=i+6;
 console.log(i);

// 7, 13, 25, 57, 193

for(p=7; p<=193; p=(p*2)-1){
    console.log(p);
}

//ALT
for(i=7; i<=193; i++){
    i=i*2;
    i=i-1;
    console.log(i);
}

for(i=5;i<=193;i++){
    i=i*2;
    i=i-3;
    console.log(i);
}