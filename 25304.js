let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let total = parseInt(input[0]);
let N = parseInt(input[1]);
let calculate = total;

for (let i = 0; i < N; i++) {
  let [money, count] = input[i + 2].split(" ").map(Number);

  calculate -= money * count;
}

calculate === 0 ? console.log("Yes") : console.log("No");
