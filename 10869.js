let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log(solution(input));

function solution(input) {
  const a = input[0];
  const b = input[1];
  let result = [];

  result = [a + b, a - b, a * b, Math.floor(a / b), a % b];

  return result.join("\n");
}
