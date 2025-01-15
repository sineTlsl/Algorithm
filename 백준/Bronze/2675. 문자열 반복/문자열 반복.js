const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const inputCnt = Number(input.shift());
for (let i = 0; i < inputCnt; i++) {
  const [R, S] = input[i].split(" ");
  let result = "";

  for (let char of S) {
    result += char.repeat(R);
  }
  console.log(result);
}