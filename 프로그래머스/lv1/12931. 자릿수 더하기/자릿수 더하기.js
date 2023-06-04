function solution(n) {
    let result = 0;
    let nArr = n.toString();
    
    [...nArr].forEach(num => {
        result += Number(num);
    })
    
    return result;
}