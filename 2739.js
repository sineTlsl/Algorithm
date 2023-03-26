let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(solution(input));

function solution(input) {
  let num = parseInt(input);
  let result = [];

  for (let i = 1; i <= 9; i++) {
    let str = `${num} * ${i} = ${num * i}`;
    result.push(str);
  }
  return result.join("\n");
}
