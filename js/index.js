// Iteration 1: Names and Input
let hacker1 = "Luca";
console.log(hacker1);

const hacker2 = "Tadej";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//Interaction 3.1
let nameSpace = ' ';
for(var i = 0; i < hacker1.length; i++) {
    nameSpace += hacker1[i].toLocaleUpperCase() + " "
}
console.log(nameSpace);

//Interaction 3.2
let nameRev = ' ';
for (let i = hacker2.length - 1; i > -1; i--) {
    nameRev += hacker2[i]
  }
  console.log(nameRev);

//Interaction 3.3
if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker1 < hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
}
