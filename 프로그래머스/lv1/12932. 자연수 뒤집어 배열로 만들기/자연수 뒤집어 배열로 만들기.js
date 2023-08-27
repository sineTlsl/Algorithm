function solution(n) {
    const nStrArr = n.toString().split('');
    
    return nStrArr.map((str) => Number(str)).reverse();
}