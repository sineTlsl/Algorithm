let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

console.log(solution(input));

function solution(input) {
  let [str, idx] = input[0].split("\n");

  return str[idx - 1];
}
