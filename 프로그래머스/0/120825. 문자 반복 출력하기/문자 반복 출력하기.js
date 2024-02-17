function solution(my_string, n) {
    const result = [];
    
    for (const s of my_string) {
        result.push(s.repeat(n));
    }
    
    return result.join('');
}