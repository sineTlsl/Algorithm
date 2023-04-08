let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

console.log(solution(input));

function solution(input) {
  let bc = 543;

  return input - bc;
}
