let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let mySet = new Set();

for (let i = 0; i < 10; i++) {
  mySet.add(input[i] % 42);
}

console.log(mySet.size);