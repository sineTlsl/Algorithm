const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let S = fs.readFileSync(file).toString().split('');

function solution(S) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const result = new Array(26).fill(0);

  S.forEach((alphabet) => {
    result[alphabets.indexOf(alphabet)]++;
  });

  return result.join(' ');
}

console.log(solution(S));
