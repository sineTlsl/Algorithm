const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, K] = fs.readFileSync(file).toString().split(' ').map(Number);

function solution(N, K) {
  let queue = [...Array(N)].map((_, i) => i + 1);
  let result = [];

  let cnt = 1;
  while (queue.length) {
    let shiftItem = queue.shift();
    if (cnt % K === 0) {
      result.push(shiftItem);
    } else {
      queue.push(shiftItem);
    }
    cnt += 1;
  }

  return `<${result.join(', ')}>`;
}

console.log(solution(N, K));