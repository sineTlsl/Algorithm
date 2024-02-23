function solution(money) {
    const result = [];
    const americano = 5500;
    
    result.push(Math.floor(money / americano));
    result.push(money % americano);
    
    return result;
}