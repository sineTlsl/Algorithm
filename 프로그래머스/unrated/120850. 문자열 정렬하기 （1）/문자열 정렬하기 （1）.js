function solution(my_string) {
    const result = [];
    
    for(const str of my_string) {
        if (Number(str)) {
            result.push(Number(str));
        } else if (str === '0') {
            result.push(0);
        }
    }
    
    return result.sort((a, b) => a - b);
}