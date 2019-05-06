
/*let numberOfPeople = 10;

if (numberOfPeople > 7) {
    console.log("You should have enough people to get a discount");
} else {
    console.log("Sorry, you need more people")
}

//switch(input) {
 //   case a:
 //   console.log("equals a");
//}

//start with variable "points = 10
//console.log score as %
//output whether they passed */

/*const points = 10;   //start with variable "points = 10

if (points >= 6) {
    console.log("That is a passing score");
} else {              //output whether they passed 
    console.log("That is a failing score");
}
console.log(points * 10 + "%");   //console.log score as %*/

//start with 3 variables
//use prompts to ask for names
//output the longest of the 3 names/if tied list both


var name1 = "Carol";
var name2 = "Carlos";
var name3 = "Johnny";

let choice = prompt("What is your name?");

if (name1.length === name2.length && name3.length === name2.length) {
    console.log(`All three names ${name1} ${name2} ${name3} have the same length.`);
} 
else if (name1.length > name2.length && name1.length > name3.length) {
    console.log(`${name1} has the longest name.`);
}
else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} has the longest name.`);
}
else if (name3.length > name2.length && name3.length > name1.length) {
    console.log(`${name3} has the longest name.`);
}
else if (name1.length === name2.length) {
    console.log(`${name1} and ${name2} tie for the longest name.`);
}
else if (name2.length === name3.length) {
    console.log(`${name2} and ${name3} tie for the longest name.`);
}
else if (name3.length === name1.length) {
    console.log(`${name3} and ${name1} tie for the longest name.`);
}




//var name1 = prompt("What is your name", "");

/*let choice = prompt("What is your name");
switch (choice) {
    case "name1":
    console.log("Jordan");
    break;
    case "name2":
    console.log("Kathy");
    break;
    case "name3":
    console.log(Ann);
    break;
}
*/









