let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(solution(input));

function solution(input) {
  // 윤년: (연도의 4의 배수 and 100의 배수가 아닐때) or 400의 배수
  let year = parseInt(input);
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 1;
  } else {
    return 0;
  }
}
