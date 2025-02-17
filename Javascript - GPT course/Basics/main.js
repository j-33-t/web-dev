// --------------------------------------------
// Step 1: Start
// --------------------------------------------
console.log('Hello, World!');


// --------------------------------------------
// Step 2: Variables, Data Types & Operators
// --------------------------------------------

// Variables and Data types
let myName = 'Alice';
const birthYear = 1990;
var isActive = true;


// --------------------------------------------
// Step 3: Variables, Data Types & Operators
// --------------------------------------------

console.log("Name:", myName);
console.log("Birth Year:", birthYear);
console.log("Active:", isActive);
console.log("In 10 years, Birth Year + 10:", birthYear + 10);

// ----------------------------------------------------------------
// Step 4: Functions ( and 3 ways to declare them , I prefer arrow)
// ----------------------------------------------------------------

// Function Declaration
function add(a,b){
    return a+b;
}

console.log("Sum of 2 and 3:", add(2,3));

// Function expression
const multiply = function(a,b) {
    return a * b;
};

console.log("Product of 4 and 5:" ,multiply(4,5));

// Arrow function 
const subtract = (a,b) => a - b ;
console.log("Subtract 5 from 10:" , subtract(10,5));


// --------------------------------------------
// Step 5: Control Flow - Conditionals & Loops
// --------------------------------------------

// Conditionals: Check if a number is even or odd
const number = 7;

if (number % 2 === 0 ) {
    console.log(number, "is even");
} else {
    console.log(number, "is odd");
}

// Loop: Iterate from 0 to 4 and log the iteration number

for (let i = 1; i < 5; i++) {
    console.log("Iteration:", i);
}


// --------------------------------------------
// Step 6: Arrays & Objects
// --------------------------------------------

// Array Example
const fruits = ["apple", "banana", "cherry"];
console.log("Intitial fruits:", fruits);

fruits.push("kiwi"); // add a new fruit
console.log("After push fruits:", fruits);

fruits.pop();; // Removes last fruit
console.log("After pop fruits:", fruits);

// Iterating through the array
    // The forEach() method calls a function for each element in an array.
    //  method is not executed for empty elements.

fruits.forEach((fruit,index) =>{
    console.log(`Fruit at index ${index}: ${fruit}`)
})


// Object Example

const person = {
    name: "Alice",
    age:30,
    hobbies: ["reading", "coding", "hiking"]
};

console.log("Person object:", person);
console.log("Person's name:", person.name);
console.log("Person's hobbies:", person.hobbies);


// --------------------------------------------------------------
// Step 7: DOM Manipulation

// Task: Access and modify elements on your HTML page using JavaScript.
// --------------------------------------------------------------

const headerTitle = document.querySelector("header h1");
headerTitle.textContent = "Welcome to JS crash course!";


// --------------------------------------------------------------
// Step 8: Event Listeners & Event Handling

// Task: Add an interactive element to your page and handle user interactions with JavaScript.
// --------------------------------------------------------------

const button = document.querySelector("#clickMe");

button.addEventListener("click", function (){
        alert("Never gonna give you up!");
});

