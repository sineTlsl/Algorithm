let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log(solution(input));

function solution(input) {
  let a = input[0];
  let b = input[1];
  let c = input[2];

  return a + b + c;
}
