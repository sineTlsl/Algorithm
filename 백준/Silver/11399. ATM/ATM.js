const fs = require('fs');
const file = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().split('\n');

const n = Number(input[0]);
let people = input[1].split(' ').map(Number);

people = people.sort((a, b) => a - b);

let result = 0;
let summary = 0;

people.forEach((person) => {
  summary += person;
  result += summary;
});

console.log(result);