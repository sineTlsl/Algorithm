function solution(n) {
    let arr = n.toString().split('').map((str) => Number(str));
    
    return Number(arr.sort((a, b) => b - a).join(''));
}