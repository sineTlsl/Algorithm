function solution(price, money, count) {
    const sum = [];

    for (let i = 1; i <= count; i++) {
        sum.push(price * i);
    }
    
    const resultSum = sum.reduce((a, b) => a + b, 0);
    
    const requiredMoney = resultSum - money;

    return requiredMoney > 0 ? requiredMoney : 0;
}
