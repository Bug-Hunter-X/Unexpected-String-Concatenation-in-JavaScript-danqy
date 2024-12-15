function foo(a, b) {
  // Check if both inputs are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input: Both arguments must be numbers';
  }
}

//Alternative using parseInt
function foo2(a,b){
  return parseInt(a) + parseInt(b);
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Invalid input: Both arguments must be numbers
console.log(foo2(1,'2')); //Output 3