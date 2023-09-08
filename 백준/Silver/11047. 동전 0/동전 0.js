const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().split('\n');

let [N, K] = input[0].split(' ').map(Number);
const coinArr = [];
let cnt = 0;

for (let i = N; i >= 1; i--) {
  coinArr.push(Number(input[i]));
}

for (let i = 0; i < N; i++) {
  cnt += Math.floor(K / coinArr[i]);
  K %= coinArr[i];

  if (K === 0) break;
}

console.log(cnt);