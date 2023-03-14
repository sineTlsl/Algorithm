let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(solution(input));

function solution(input) {
  let a = input[0];
  let b = input[1];

  return a / b;
}
