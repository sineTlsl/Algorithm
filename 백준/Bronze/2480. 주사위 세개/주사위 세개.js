let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log(solution(input));

function solution(input) {
  let dice1 = input[0];
  let dice2 = input[1];
  let dice3 = input[2];

  if (dice1 === dice2 && dice2 === dice3) {
    return 10000 + dice1 * 1000;
  } else if (dice1 === dice2 || dice1 === dice3 || dice2 === dice3) {
    if (dice1 === dice2) {
      return 1000 + dice1 * 100;
    } else {
      return 1000 + dice3 * 100;
    }
  } else {
    return Math.max(dice1, dice2, dice3) * 100;
  }
}