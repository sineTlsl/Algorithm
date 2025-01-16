const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ");

for (let i = 1; i <= N; i++) {
  console.log(input[i].split("").reverse().join(""));
}