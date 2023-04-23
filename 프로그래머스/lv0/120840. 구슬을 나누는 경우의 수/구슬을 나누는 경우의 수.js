function solution(balls, share) {
    /* 재귀 문제 */
    // balls: 구슬의 개수, share: 나누어 줄 구슬 개수
    const factorial = (n) => {
        if (n <= 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
   
    if (balls === share) {
        return 1; 
    } 
    
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}