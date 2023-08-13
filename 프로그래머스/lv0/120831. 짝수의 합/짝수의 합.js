function solution(n) {
    let numSum = 0;
    
    for (let i = 2; i <= n; i += 2) {
        numSum += i;
    }
    
    return numSum;
}