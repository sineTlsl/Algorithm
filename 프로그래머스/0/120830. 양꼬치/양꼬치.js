function solution(n, k) {
    const skewers = 12000;
    const drink = 2000;
    let result = 0;
    
    return n >= 10 ? skewers * n + drink * (k - Math.floor(n / 10)) : skewers * n + drink * k;
}