function solution(arr) {
    let addArr = arr.reduce((a, b) => a + b);
    
    return addArr / arr.length;
}