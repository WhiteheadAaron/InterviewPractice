//  Write a function that takes in a number n, and return that number in descending order.
// For example, 38594 should return 34589

function descendingOrder(n) {
  let newNum = ("" + n).split("").sort();
  let solution = newNum[newNum.length - 1];

  for (let i = newNum.length - 2; i >= 0; i--) {
    solution = solution + newNum[i];
  }

  return Number(solution);
}

// console.log(descendingOrder(912344456));

// Write a function that takes in a string with only the letters a through m

function printerError(s) {
  let two = s.length;
  let one = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m" || s[i] < "a") {
      one = one + 1;
    }
  }

  return `${one}/${two}`;
}

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))

// Write a function that determines if the 3 inputs given can make a valid triangle or not

function isTriangle(a, b, c) {
  let newArr = [a, b, c].sort();
  if (newArr[0] + newArr[1] <= newArr[2]) {
    return false;
  }
  return true;
}

// console.log(isTriangle(1, 2, 2));

// Write a function that counts and returns a statement based on how many people "like" something on facebook
// likes [] // must be "no one likes this"
// likes ["Peter"] must be "Peter likes this"
// likes ["Jacob", "Alex"] must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] must be "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// Write a function that takes in an integer, and returns all numbers that are divisible in that integer excluding the number itself and 1
// divisors(12); should return [2,3,4,6]
// divisors(25); should return [5]
// divisors(13); should return "13 is prime"

function divisors(integer) {
  let half = integer / 2;
  let solution = [];
  for (let i = 2; i <= half; i++) {
    if (integer % i === 0) {
      solution.push(i);
    }
  }
  if (solution.length === 0) {
    return `${integer} is prime`;
  }
  return solution;
}

// console.log(divisors(12));

// Write a function that when given an array of integers, find the only integer that appears an odd number of times. There will always only be one that does

function findOdd(input) {
  let prev = "hello";
  input = input.sort();

  for (let i = 0; i < input.length; i++) {
    if (prev === input[i]) {
      prev = "hello";
    } else if (prev === "hello") {
      prev = input[i];
    } else {
      return prev;
    }
  }
}

// console.log(findOdd([10, 5, 5, 6, 6, 8, 9, 9, 10]));

// Write a function that takes in an array of numbers, and returns the sum of the two smallest numbers in the array

function sumTwoSmallestNumbers(numbers) {
  function sortNumber(a, b) {
    return a - b;
  }

  return numbers.sort(sortNumber)[0] + numbers.sort(sortNumber)[1];
}

// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

// Write a function that checks to see if there are the same number of x's and o'x in a string. Any character can exist in the string

function XO(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "X" || str[i] === "x") {
      x = x + 1;
    }
    if (str[i] === "O" || str[i] === "o") {
      o = o + 1;
    }
  }
  if (x === o) {
    return true;
  }

  return false;
}

// console.log(XO("ooxXm"));

// Write a function that takes an array of strings, return a new array that include only the strings that have 4 characters

function friend(friends) {
  let solution = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      solution.push(friends[i]);
    }
  }
  return solution;
}

// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// Write a function that takes in a consecutive string of letters, with one missing from chronological order. Return the letter that is missing
// ['a','b','c','d','f'] -> 'e'

function findMissingLetter(array) {
  let prev = array[0].charCodeAt(0) - 1;
  let solution;

  for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt(0) - prev !== 1) {
      solution = String.fromCharCode(array[i].charCodeAt(0) - 1);
    }
    prev = array[i].charCodeAt(0);
  }
  return solution;
}

// console.log(findMissingLetter(["O", "Q", "R", "S"]));

// Write a function that finds all numbers below input n that are either multiples of 3 OR 5. If it's a multiple of both do not count it twice. The function then returns the sum of all of these numbers

function solution(number) {
  let solution = 0;
  for (let i = number - 1; i > 2; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      solution = solution + i;
    }
  }
  return solution;
}

// console.log(solution(10));

// Write a function that returns a list of names as follows:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''

function list(names) {
  let first = "";
  let second;
  let last;
  if (names.length === 0) {
    return "";
  }
  if (names.length === 1) {
    return names[0].name;
  } else {
    for (let i = 0; i < names.length; i++) {
      if (i === names.length - 2) {
        second = names[names.length - 2].name;
      }
      if (i === names.length - 1) {
        last = names[names.length - 1].name;
      }
      if (i < names.length - 2) {
        first = first + `${names[i].name}, `;
      }
    }
  }

  return first + second + " & " + last;
}

// console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));

// Write a function to see if a cashier will have the right amount of change based on what order people enter a line
// tickets([25, 25, 50]) => YES
// tickets([25, 100]) => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine) {
  let cash = 0;
  let twenty = 0;
  let fifty = 0;
  let hundred = 0;

  for (let i = 0; i < peopleInLine.length; i++) {
    let bill = peopleInLine[i];
    let change = bill - 25;
    if (change > cash) {
      return "NO";
    }
    if (bill === 25) {
      twenty += 1;
    }
    if (bill === 50) {
      if (twenty === 0) {
        return "NO";
      } else {
        twenty -= 1;
        fifty = +1;
      }
    }
    if (bill === 100) {
      if (twenty === 0 || (fifty === 0 && twenty < 3)) {
        return "NO";
      }
      if (fifty > 0) {
        fifty -= 1;
        twenty -= 1;
        hundred += 1;
      }
      if (fifty === 0 && twenty >= 3) {
        twenty -= 3;
        hundred += 1;
      }
    }
    cash += bill;
  }
  return "YES";
}

// console.log(tickets([25, 25, 50, 50, 100]));

// Write a function to calculate qeue times based on two inputs, an array of customers with n values for time, and the number of registers available

function queueTime(customers, n) {
  let solution = 0;
  if (n === 1) {
    customers.forEach(item => (solution += item));
    return solution;
  }
  let lines = [];
  function createLines() {
    for (let i = 0; i < n; i++) {
      lines[i] = 0;
    }
    return lines;
  }
  createLines();

  function sortNumber(a, b) {
    return a - b;
  }
  for (let i = 0; i < customers.length; i++) {
    lines = lines.sort(sortNumber);
    lines[0] = lines[0] + customers[i];
  }
  lines = lines.sort(sortNumber);
  return lines[lines.length - 1];
}

// console.log(queueTime([10,2,3,3], 2));


// Write a function that takes an array of 10 integers and returns them in phone number form (123) 456-7890

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


