function solution(numbers) {
    let sum = numbers.reduce((a, b) => a + b);
    
    return sum / numbers.length
}