const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().split('\n');

const numberArr = input[1].split(' ').map(Number);
const v = Number(input[2]);
let cnt = 0;

numberArr.forEach((number) => {
  if (number === v) cnt++;
});

console.log(cnt);