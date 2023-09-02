function solution(a, b) {
    let sum = 0;
    const startNum = a < b ? a : b;
    const endNum = a > b ? a: b;
    
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    
    return sum;
}