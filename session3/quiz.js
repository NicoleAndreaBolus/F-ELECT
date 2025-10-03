// Quiz: Free Elective : If and Else Statements

// Enter your color code 1

/* 
1 - Red
2 - Green
3 - Blue
4 - Cyan
5- Magenta

Other Input -> Invalid entry

console.log("Enter your color code (1-5): ");
console.log("Your favorite color is: " + favoriteColor);


*/

let favoriteColor = prompt("Enter your color code (1-5): ");
if (favoriteColor == 1) {
    favoriteColor = "Red";
} else if (favoriteColor == 2) {
    favoriteColor = "Green";
} else if (favoriteColor == 3) {
    favoriteColor = "Blue";
} else if (favoriteColor == 4) {
    favoriteColor = "Cyan";
} else if (favoriteColor == 5) {
    favoriteColor = "Magenta";
} else {
    favoriteColor = "Invalid entry";
}

alert("Your favorite color is: " + favoriteColor);
console.log("Your favorite color is: " + favoriteColor);





