let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  let result = "";
  let [R, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < Number(R); k++) {
      result += str[j];
    }
  }
  console.log(result);
}
