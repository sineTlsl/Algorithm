let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log(solution(input));

function solution(input) {
  let a = input[0];
  let b = input[1];
  let c = input[2];
  let result = [];

  result.push((a + b) % c);
  result.push(((a % c) + (b % c)) % c);
  result.push((a * b) % c);
  result.push(((a % c) * (b % c)) % c);

  return result.join("\n");
}
