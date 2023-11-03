const fs = require('fs');
let input = fs.readFileSync('/dev/stdin');

function solution(n) {
  let cnt = 0;

  while (n > 0) {
    if (n % 5 === 0) {
      n -= 5;
    } else {
      n -= 3;
    }
    cnt++;
  }

  return n === 0 ? cnt : -1;
}

console.log(solution(input));