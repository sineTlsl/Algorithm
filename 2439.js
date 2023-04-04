let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let N = parseInt(input);
let star = new Array(N).fill(" ");

for (let i = N - 1; i >= 0; i--) {
  star[i] = "*";

  console.log(star.join(""));
}
