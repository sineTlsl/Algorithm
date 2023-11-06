const fs = require('fs');
let input = fs.readFileSync('/dev/stdin');

const [A, B] = input.toString().split(' ').map(Number);

function solution(a, b) {
  let cnt = 1;
  
  while (a < b) {
    if (b % 10 === 1) {
      b = Number(b.toString().slice(0, -1));
    } else if (b % 2 === 0) {
      b = parseInt(b / 2);
    } else {
      break;
    }
    cnt++;
  }

  return a === b ? cnt : -1;
}

console.log(solution(A, B));