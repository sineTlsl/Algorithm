const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const extension = {};

for (let i = 1; i <= N; i++) {
  const itemExtension = input[i].split(".")[1];

  if (!itemExtension) continue;
  if (!extension[itemExtension]) {
    extension[itemExtension] = 1;
  } else {
    extension[itemExtension]++;
  }
}

const sorted = Object.entries(extension)
  .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  .map(([key, value]) => `${key} ${value}`);

console.log(sorted.join("\n"));
