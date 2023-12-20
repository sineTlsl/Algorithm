const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = [0, ...input.shift().split(' ').map(Number)];

const prefixSum = [0];
for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}

let sum = 0;
const result = [];

for (let i = 0; i < M; i++) {
  const [left, right] = input[i].split(' ').map(Number);

  sum = prefixSum[right] - prefixSum[left - 1];
  result.push(sum);
}

console.log(result.join('\n'));