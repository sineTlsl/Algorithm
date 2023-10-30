const fs = require('fs');
const file = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
const coins = [];
let cnt = 0;

for (let i = n; i >= 1; i--) {
  coins.push(Number(input[i]));
}

for (let i = 0; i < n; i++) {
  cnt += Math.floor(k / coins[i]);
  k %= coins[i];

  if (k === 0) break;
}

console.log(cnt);