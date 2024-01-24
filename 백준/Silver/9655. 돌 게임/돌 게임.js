const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim();

if (input % 2 === 0) {
    console.log('CY');
} else {
    console.log('SK');   
}