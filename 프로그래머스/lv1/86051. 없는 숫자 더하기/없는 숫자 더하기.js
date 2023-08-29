function solution(numbers) {
    const total = 45;
    const subtract = numbers.reduce((a, b) => a + b);
    
    return total - subtract;
}