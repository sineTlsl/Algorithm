const fs = require('fs');
const file = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().split('\n');

const n = Number(input[0]);
const people = input[1].split(' ').map(Number).sort((a, b) => a - b);
const time = [];

people.forEach((person) => {
  if (time.length !== 0) {
    time.push(time[time.length - 1] + person);
  } else {
    time.push(person);
  }
});

console.log(time.reduce((a, b) => a + b));