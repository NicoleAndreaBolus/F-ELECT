/*
Multiple If Conditional Statements

Sample Output:
Input Value     Rank
1-5             Mythical Immortal
6-10            Mythical Glory
11-15           Mythical Honor
16-20           Mythic
Other Inputs:   Invalid Input Value

*/

let input = Number(prompt("Enter a value between 1-20: "));
let rank = "";

if (input >= 1 && input <= 5) {
    rank = "Mythical Immortal";
} else if (input >= 6 && input <= 10) {
    rank = "Mythical Glory";
} else if (input >= 11 && input <= 15) {
    rank = "Mythical Honor";
} else if (input >= 16 && input <= 20) {
    rank = "Mythic";
} else {
    console.log("Invalid Input Value");
    rank = "N/A";
}

console.log("Rank: " + rank);