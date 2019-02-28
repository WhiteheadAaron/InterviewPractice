
//  Write a function that takes in a number n, and return that number in descending order. 
// For example, 38594 should return 34589

function descendingOrder(n){
  let newNum = ('' + n).split('').sort();
  let solution = newNum[newNum.length - 1];
  
  for (let i = newNum.length - 2; i >= 0; i--) {
    solution = solution + newNum[i];
  }

  return Number(solution);
}

console.log(descendingOrder(912344456));