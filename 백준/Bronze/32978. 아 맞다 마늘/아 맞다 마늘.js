const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const allIngredient = input[1].split(" ");
const ingredient = new Set(input[2].split(" "));

for (const item of allIngredient) {
  if (!ingredient.has(item)) {
    console.log(item);
    break;
  }
}