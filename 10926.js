let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(solution(input));

function solution(input) {
  return input + "??!";
}
