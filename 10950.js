let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = parseInt(input[0]);
let result = [];

for (let i = 1; i <= N; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  result.push(a + b);
}

console.log(result.join("\n"));
