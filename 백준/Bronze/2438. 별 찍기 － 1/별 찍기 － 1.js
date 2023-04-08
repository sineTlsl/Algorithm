let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let star = "";
for (let i = 0; i < parseInt(input); i++) {
  star += "*";
  console.log(star);
}