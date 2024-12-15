# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle error in JavaScript: unexpected string concatenation due to loose typing.  The `foo` function intends to add two numbers, but it silently concatenates them when one is a string.

## Bug
The `bug.js` file shows the problematic function.  Note the output when passing a number and a string. 

## Solution
The `bugSolution.js` file offers a solution by explicitly checking the types or using `parseInt` to convert strings to numbers before the addition.

This example highlights the importance of type checking or careful input validation in JavaScript to avoid unexpected behavior.