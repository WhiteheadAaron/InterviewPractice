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
    for (let i = 2; i <= half; i ++) {
        if (integer % i === 0) {
            solution.push(i);
        }
    }
    if (solution.length === 0){
        return `${integer} is prime`;
    }
    return solution;
}

console.log(divisors(12));
