function solution(money) {
    let result = [];
    
    if (money >= 5500) {
        let coffeeCnt = Math.floor(money / 5500);
        let currentMoney = money % 5500;
        
        result = [coffeeCnt, currentMoney];
    } else {
        result = [0, money];
    }
    
    return result;
}