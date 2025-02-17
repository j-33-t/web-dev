// Global context
console.log(this); // In browsers, prints the window object

// Regular function: 'this' depends on how the function is called
function showThis() {
  console.log(this);
}
showThis(); // In strict mode, undefined; otherwise, global object

// Object method: 'this' refers to the object
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet(); // "Hello, my name is Alice"

// Arrow function: 'this' is inherited from the enclosing scope
const obj = {
  name: "Bob",
  greet: () => {
    console.log(`Hi, my name is ${this.name}`);
  },
};
obj.greet(); // 'this.name' might be undefined because it inherits from the global context

// Explicit binding using call
function showName() {
  console.log(this.name);
}
const user = { name: "Charlie" };
showName.call(user); // "Charlie"
