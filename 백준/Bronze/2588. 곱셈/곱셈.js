let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(solution(input));

function solution(input) {
  let num1 = parseInt(input[0]);
  let num2 = input[1].split("").map(Number);
  let result = [];

  num2.forEach((num) => {
    result = [num1 * num, ...result];
  });
  result.push(num1 * parseInt(input[1]));

  return result.join("\n");
}
