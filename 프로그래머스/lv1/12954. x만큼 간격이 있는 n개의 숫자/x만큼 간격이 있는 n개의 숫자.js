function solution(x, n) {
    let result = [];
    let addGap = x;
    
    for (let i = 0; i < n; i++) {
        result.push(addGap);
        addGap += x;
    }
    
    return result;
}