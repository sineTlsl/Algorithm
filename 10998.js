let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(solution(input));
function solution(input) {
  const num1 = input[0];
  const num2 = input[1];

  return num1 * num2;
}
