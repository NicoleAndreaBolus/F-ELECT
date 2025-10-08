// OCT 08, 2025 - FREE ELECTIVE

console.log("LOOPING : USING FOR LOOP");

for(i=0; i<5; i++){
    console.log("Looping value is: " + i);
}


/*

for(x=0; x<5; x++){
   console.log("Looping value is: " + x);
}
*/

// How does it work?
// 1. Initialize the variable (x=0)
// 2. Drops on console.log
// 3. Increment the variable (x++)
// 4. Check the condition (x<5)
// 5. If true, repeat step 2-4
// 6. If false, exit the loop

// Write a program to print even numbers from 2, 4, 6, 8, 10

console.log("LOOPING : USING FOR LOOP - EVEN NUMBERS");

for(x=2; x<=10; x+=2){
    console.log(x);
}

// Alt
console.log("== LOOPING : USING FOR LOOP - EVEN NUMBERS (ALTERNATE WAY) ==");
for(i=2; i<=10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Write a program to print even numbers from 5, 10, 15, 20, 25, 30 up to 50
console.log("== LOOPING : USING FOR LOOP - MULTIPLES OF 5 ==");
for(a=5; a<=50; a+=5){
    console.log(a);
}

// 30 down to 0 by decrement of 3
console.log("== LOOPING : USING FOR LOOP - COUNTDOWN BY 3 ==");
for(y=30; y>=0; y-=3){
    console.log(y);
}

// 3, 7, 11, 15, 19, 23, 27, 31
console.log("== LOOPING : USING FOR LOOP - INCREMENT BY 4 ==");
for(z=3; z<=31; z+=4){
    console.log(z);
}

//0, 2, 6, 14, 30

for(n=0; n<=30; n=(n*2)+2){
    console.log(n);
}
//ALT 
for(i=0; i<31; i++){
    i=i*2;
    console.log(i);
}

// Output: 6, 18, 42, 90, 18