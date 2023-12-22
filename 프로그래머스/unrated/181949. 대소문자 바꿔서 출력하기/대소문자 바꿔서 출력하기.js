const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let newStr = '';
    
    for (const c of str) {
        if (c === c.toUpperCase()) {
            newStr += c.toLowerCase();
        } else if (c === c.toLowerCase()) {
            newStr += c.toUpperCase();
        }
    }
    
   console.log(newStr);
});