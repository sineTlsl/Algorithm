let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

console.log(soluction(input));

function soluction(input) {
  let hour = input[0];
  let minute = input[1];
  let result = [];

  if (minute < 45) {
    if (hour !== 0) {
      result.push(hour - 1);
    } else {
      result.push(23);
    }
    result.push(60 - (45 - minute));
  } else {
    result.push(hour);
    result.push(minute - 45);
  }

  return result.join(" ");
}
