function solution(num_list) {
    const mult = num_list.reduce((a, b) => a * b);
    const sum = num_list.reduce((a, b) => a + b);
    
    return mult < sum * sum ? 1 : 0;
}