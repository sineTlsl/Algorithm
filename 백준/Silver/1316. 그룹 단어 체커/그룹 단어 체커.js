const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().split("\n");

let N = Number(input[0]);
let cnt = 0;

for (let i = 1; i <= N; i++) {
  let str = input[i];

  if (check(str)) cnt++;
}
console.log(cnt);

function check(str) {
  let setStr = new Set(str[0]);

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      if (setStr.has(str[i + 1])) return false;
      else setStr.add(str[i + 1]);
    }
  }
  return true;
}