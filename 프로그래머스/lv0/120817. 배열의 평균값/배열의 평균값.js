function solution(numbers) {
    let sumNum = numbers.reduce((acc, cur) => (acc + cur));
    
    return sumNum / numbers.length;
}