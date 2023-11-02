const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();

function solution(input) {
  const numbers = input.split('-');
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i].split('+').map(Number).reduce((a, b) => a + b);

    if (i === 0) result += current;
    else result -= current;
  }

  return result;
}

console.log(solution(input));
