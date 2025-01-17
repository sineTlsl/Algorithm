const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let max = 0;
let result = "";
for (let i = 0; i < input.length; i++) {
  const size = input[i].length;

  if (size > max) {
    max = size;
  }
}
const arr = new Array(5).fill("").map(() => new Array(max).fill(""));

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    arr[i][j] = input[i][j];
  }
}

for (let i = 0; i < max; i++) {
  result += arr[0][i] + arr[1][i] + arr[2][i] + arr[3][i] + arr[4][i];
}
console.log(result);
