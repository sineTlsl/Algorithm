function solution(s){
    const openBracket = ["(", "["];
    const closeBracket = [")", "]"];
    const stack = [];
    let result = true;
    
    [...s].forEach(bracket => {
        if (openBracket.includes(bracket)) {
            stack.push(bracket);
        } else if (closeBracket.includes(bracket)) {
            if (stack.pop() !== openBracket[closeBracket.indexOf(bracket)]) {
                result = false;
            }
        }
    })
    if (stack.length) return false;
    
    return result;
}