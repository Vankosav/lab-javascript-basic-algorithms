// Iteration 1: Names and Input

let hacker1 = "John";
let number1 = hacker1.length;
console.log("The driver's name is " + hacker1 + ".")

let hacker2 = "Michael";
let number2 = hacker2.length;
console.log("The navigator's name is " + hacker2 + ".");

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
console.log("The driver has the longest name, it has " + number1 + " characters.");
}
  
else if (hacker1.length < hacker2.length) {
console.log("It seems that the navigator has the longest name, it has " + number2 + " characters.");
}

else  {
console.log("Wow, you both have equally long names, " + number1 + " characters!");
};

// Iteration 3: Loops
//uppercase and space
 let newNameDriver = " ";

  for (const char of hacker1) {
    
    newNameDriver += char.toUpperCase() + " ";
  
     }
console.log(newNameDriver);


//reverse hacker2 name 
function reverseNav(hacker2) {
   let reverseNameNav = "";
  for (let i = hacker2.length - 1; i >= 0; i--) { 
        reverseNameNav = reverseNameNav + hacker2[i]; 
    }
  return reverseNameNav;
}
console.log(reverseNav(hacker2));

//lexicographic order
