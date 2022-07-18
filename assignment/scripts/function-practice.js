console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log(helloName("Peter"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}

console.log(addNumbers(1, 3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(multiplyThree(5, 5, 5));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let array = [1, 4, 7, 8];

function getLast(array) {
  if (array.length === 0) {
    return "undefined";
  } else {
    return array.slice(-1);
  }
}

console.log(getLast(array));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let newArray = [6, 12, 5, 9];
/*
function find(value, array) {
  for (i = 0; i < newArray.length; i++) {
    if (value === newArray[i]) {
      return true;
    }
  }
  return false;
}
*/
function find(value, newArray) {
  for (const x of newArray) {
    if (x === value) {
      return true;
    }
  }
  return false;
}

console.log(find(8, newArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let item of string) {
    if (item === letter) {
      return true;
    } else {
      return false;
    }
  }
}

console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
let arr = [5, 7, 2, 8, 9];

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumAll(arr));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let input = [-7, 4, -5, 9, 3, 5, -6, 4];

function getPositiveValues(fromArr) {
  newArr = [];
  for (i = 0; i < fromArr.length; i++) {
    if (fromArr[i] > 0) {
      newArr.push(input[i]);
    }
  }
  return newArr;
}

console.log(getPositiveValues(input));
console.log(input);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
