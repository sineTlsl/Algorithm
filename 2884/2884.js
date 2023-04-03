let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

console.log(soluction(input));

function soluction(input) {
  let hour = parseInt(input[0].split(" ")[0]);
  let minute = parseInt(input[0].split(" ")[1]);

  if (minute < 45) {
    //분이 45분 미만이라면
    hour -= 1;
    minute += 15;
    if (hour < 0) hour = 23;
  } else {
    minute -= 45;
  }

  return hour + " " + minute;
}
