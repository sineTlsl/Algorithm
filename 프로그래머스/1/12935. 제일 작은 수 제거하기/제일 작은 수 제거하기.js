function solution(arr) {
    let min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1);
    
    return arr.length ? arr : [-1];
}