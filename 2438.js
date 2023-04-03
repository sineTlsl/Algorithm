let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

let star = "";
for (let i = 0; i < parseInt(input); i++) {
  star += "*";
  console.log(star);
}
