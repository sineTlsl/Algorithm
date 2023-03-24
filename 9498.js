let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(solution(input));

function solution(input) {
  let score = parseInt(input);

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
