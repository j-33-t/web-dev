function outer() {
    let counter = 0;
    return function inner() {
      counter++;
      return counter;
    }
  }
  
  const increment = outer();
  console.log(increment()); // Output: 1
  console.log(increment()); // Output: 2
  