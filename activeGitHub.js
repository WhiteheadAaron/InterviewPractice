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

function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${
    numbers[5]
  }-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Write a function that returns the only odd or only even number from an array of numbers (There will be all odd and one even or vice versa no matter what)

function findOutlier(integers) {
  let odd = {
    word: null,
    count: 0
  };

  let even = {
    word: null,
    count: 0
  };

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      if (even.count !== 0 && odd.word !== null) {
        return odd.word;
      } else if (odd.count > 1 && even.count === 0) {
        return integers[i];
      } else {
        even.count = even.count + 1;
        even.word = integers[i];
      }
    }

    if (integers[i] % 2 !== 0) {
      if (odd.count !== 0 && even.word !== null) {
        return even.word;
      } else if (even.count > 1 && odd.count === 0) {
        return integers[i];
      } else {
        odd.count = odd.count + 1;
        odd.word = integers[i];
      }
    }
  }
}

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

// Write a function that determines how many times a ball will bounce above a window given the initial height, the bounce factor, and the height of the window. Count both the bouncing above the window, and falling back down below it.

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let count = -1;

  for (let i = h; i > window; i = i * bounce) {
    count += 2;
  }

  return count;
}

// console.log(bouncingBall(3, .66, 1.5));

// Write a function that takes in seconds as the argument, and returns a string in easy to read form for humans with how many years, days, hours, minutes and seconds the total amounts to

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;

  while (seconds >= 31536000) {
    years++;
    seconds -= 31536000;
  }

  while (seconds >= 60 * 60 * 24) {
    days++;
    seconds -= 60 * 60 * 24;
  }

  while (seconds >= 60 * 60) {
    hours++;
    seconds -= 60 * 60;
  }

  while (seconds >= 60) {
    minutes++;
    seconds -= 60;
  }

  return `${years} years, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}

// console.log(formatDuration(31536999));

// Write a function that tests if a number is prime or not

function isItPrime(n) {
  for (let i = Math.floor(n / 2); i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isItPrime(13));

// Write a function that returns an array of all numbers that are prime below and including a given integer

function returnAllPrime(n) {
  let solution = [1, 2];

  for (let i = n; i > 2; i--) {
    let count = 0;
    for (let j = Math.floor(i / 2); j > 1; j--) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      solution.push(i);
    }
  }
  function sortNumber(a, b) {
    return a - b;
  }
  return solution.sort(sortNumber);
}

// console.log(returnAllPrime(59));

// Write a function that returns the last digit of the number that results from given a to the power of given b

function lastDigit(a, b) {
  a = Number(a);
  b = Number(b);

  let result = Math.pow(a, b).toString();
  console.log(result);
  return Number(result[result.length - 1]);
}

// console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"));

// Write a function that takes arguments for both original array length, as well as an iterator value. If the length is set to be 4, the original array will be [1, 2, 3, 4]. If the second argument is 3, it will remove an item every 3 times until they're all gone. The final result would look like this: [3, 2, 4, 1]

function josephus(items, k) {
  let location = 0;
  let result = [];

  while (items.length !== 0) {
    location += k - 1;
    while (location > items.length - 1) {
      location = location - items.length;
    }
    result.push(items[location]);
    items.splice(location, 1);
  }

  return result;
}

// console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));

// Write a function that returns the total value of a given integers factorial

function factorial(n) {
  let solution = 1;
  while (n > 1) {
    solution = solution * n;
    n--;
  }
  return solution;
}

// console.log(factorial(5));

function crackingTheCode(input) {
  input = input.split(" ");

  let answer = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i][0] === "a") {
      answer = `${answer}${input[i][1]}`;
    }
    if (input[i][0] === "b") {
      answer = `${answer}${input[i][2]}`;
    }
    if (input[i][0] === "c") {
      answer = `${answer}${input[i][3]}`;
    }
    if (input[i][0] === "d") {
      answer = `${answer}${input[i][4]}`;
    } else {
      answer = answer + " ";
    }
  }
  return answer;
}

// console.log(crackingTheCode('craft block argon meter bells brown croon droop'));

function daysInMonth(str, leap = false) {
  let answer = "";

  switch (str) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      answer = `${str} has 31 days`;
      break;
    case "February":
      answer = `${str} has ${leap ? "29" : "28"} days`;
      break;
    default:
      answer = `${str} has 30 days"`;
      break;
  }

  return answer;
}

// console.log(daysInMonth('February', true));

function rockPaperScissors(
  input,
  compNumb = Math.floor(Math.random() * 3) + 1
) {
  return input === "Rock"
    ? compNumb === 1
      ? "It is a tie"
      : compNumb === 2
      ? "You lose"
      : "You Win"
    : input === "Paper"
    ? compNumb === 1
      ? "You Win"
      : compNumb === 2
      ? "It is a tie"
      : "You lose"
    : compNumb === 1
    ? "You lose"
    : compNumb === 2
    ? "You win"
    : "It is a tie";
}

// console.log(rockPaperScissors('Rock'));

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function helloWorld() {
  console.log("Hello World");
}

function goodbyeWorld() {
  console.log("Goodbye World");
}

// console.log(repeat(helloWorld, 5));

function filter(arr, fn) {
  // TASK: Define your function here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ["Rich", "Joe", "Bhaumik", "Ray"];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === "R";
});

// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return location => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
    console.log(
      `The ${typeOfWarning} hazard has triggered ${warningCounter} ${
        warningCounter === 1 ? "time" : "times"
      } today!`
    );
  };
}

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Centinela Ave and Olympic Blvd');

function forEachFilterMap(arr) {
  // this uses filter and removes arrays that have a negative number
  let filteredArray = arr.filter(item => item[0] >= 0 && item[1] >= 0);

  // this uses map and counts the total of both numbers added up (absolute values)
  let mapArray = arr.map(item => Math.abs(item[0]) + Math.abs(item[1]));

  // this uses forEach
  let forEachArray = arr.forEach(item => {
    console.log(Math.abs(item[0]) + Math.abs(item[1]));
  });

  return forEachArray;
}

// console.log(forEachFilterMap([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]));

function reduceArray(str) {
  str = str.split(" ");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    str[i].length === 3
      ? (result = result + " ")
      : (result = result + str[i][str[i].length - 1].toUpperCase());
  }
  return result;
}

// console.log(reduceArray('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));

function object1() {
  let loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
      return (this.water / 4) * 100;
    }
  };

  console.log(loaf.flour, loaf.water);
  console.log(loaf.hydration());
}

// object1();

function iterateObject() {
  let obj = {
    foo: "hello",
    bar: "there",
    fum: "general",
    quux: "kenobi"
  };

  for (let property1 in obj) {
    console.log(property1, obj[property1]);
  }
}

// iterateObject();

function arrayInObjects() {
  let obj = {
    meals: [
      "breakfast",
      "second breakfast",
      "elevenses",
      "lunch",
      "afternoon tea",
      "dinner",
      "supper"
    ]
  };

  return obj.meals[3];
}

// console.log(arrayInObjects());

function arrayOfObjects() {
  let arr = [
    {
      name: "Aaron",
      jobTitle: "Web Developer"
    },
    {
      name: "Meghan",
      jobTitle: "Software Engineer",
      boss: "Aaron"
    },
    {
      name: "Meagan",
      jobTitle: "Financial Analyst",
      boss: "Aaron"
    },
    {
      name: "Dad",
      jobTitle: "CPA",
      boss: "Mom"
    },
    {
      name: "Mom",
      jobTitle: "Sleep Technician",
      boss: "Meghan"
    }
  ];

  arr.forEach(item =>
    item.boss
      ? console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}.`)
      : console.log(`${item.jobTitle} ${item.name} doesn't report to anybody.`)
  );
}

// arrayOfObjects();





function objectCrackTheCode(str) {
  let cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
    decode: function(str) {
      let result = "";
      str = str.split(" ");
      str.forEach(item => {
        this[item[0]] ? result += item[this[item[0]] - 1] : result += ' ';
      })
      return result;
    }
  };

  return cipher.decode(str);
}

// console.log(objectCrackTheCode('craft block argon meter bells brown croon droop'));



function createCharacter(name, nickName, race, origin, attack, defense) {
  if (isNaN(attack) || isNaN(defense)) {
    throw new Error("Must be a number");
  } else {
    let character = {
      name,
      nickName,
      race,
      origin,
      attack,
      defense,
      describe: function() {
        return `${this.name} is a ${this.race} from ${this.origin}`;
      },
      evaluateFight: function(obj) {
        let taken = Math.max(0, obj.attack - this.defense);
        let given = Math.max(0, this.attack - obj.defense);

        return `Opponent takes ${given} damage and you receive ${taken} damage!!`;
      }
    };
    return character;
  }
}

let gandalf = createCharacter("Gandalf the white", "gdalf", "g", "p", 1, 2);
let smandalf = {
  name: "Gandalf the blue",
  nickName: "bwolf",
  race: "pineapple",
  origin: "pannuccis pizza",
  attack: 10,
  defense: 20
};
// console.log(gandalf.evaluateFight(smandalf));

let characters = [
  createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1),
  createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
  createCharacter(
    "Aragorn Son of Arathorn",
    "aragorn",
    "Man",
    "Dunnedain",
    6,
    8
  ),
  createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),
  createCharacter("Arwen Undomil", "Big Arw", "Half-Elf", "Rivendell", 988, 0)
];

// console.log(characters);

function findAndDescribe(name) {
  return characters.find(obj => obj.name === name).describe();
}

// console.log(findAndDescribe("Bilbo Baggins"));

function filterForHobbits() {
  return characters.filter(obj => obj.race === "Hobbit");
}

//  console.log(filterForHobbits());

function filterForAttacksGreaterThanFive() {
  return characters.filter(obj => obj.attack > 5);
}

//  console.log(filterForAttacksGreaterThanFive());

function databaseSearch() {
  const HEROES = [
    { id: 1, name: "Captain America", squad: "Avengers" },
    { id: 2, name: "Iron Man", squad: "Avengers" },
    { id: 3, name: "Spiderman", squad: "Avengers" },
    { id: 4, name: "Superman", squad: "Justice League" },
    { id: 5, name: "Wonder Woman", squad: "Justice League" },
    { id: 6, name: "Aquaman", squad: "Justice League" },
    { id: 7, name: "Hulk", squad: "Avengers" }
  ];

  function findOne(arr, query) {
    let keys = Object.keys(query);
    let props = Object.values(query);

    for (let i = 0; i < keys.length; i++) {
      arr = arr.filter(item =>  item[keys[i]] === props[i]);
    }
    return arr[0] ? arr[0] : null;
  }
  
  return findOne(HEROES, { squad: 'Justice League' });
}

// console.log(databaseSearch());



function databaseSearch2() {
  const Database = {
    store: {
      heroes: [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ]
    },
    findOne: function (query) {
      let keys = Object.keys(query);
      let props = Object.values(query);
      let arr = this.store.heroes;
  
      for (let i = 0; i < keys.length; i++) {
        arr = arr.filter(item =>  item[keys[i]] === props[i]);
      }
      return arr[0] ? arr[0] : null;
    }
  };
  return Database.findOne({ squad: 'Justice League' });

}

// console.log(databaseSearch2());