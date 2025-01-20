const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const fruit = {
  STRAWBERRY: 0,
  BANANA: 0,
  LIME: 0,
  PLUM: 0
}

for (let i = 1; i <= N; i++) {
  const [S, X] = input[i].split(' ');
  fruit[S] += Number(X);
}

Object.values(fruit).includes(5) ? console.log('YES') : console.log('NO');