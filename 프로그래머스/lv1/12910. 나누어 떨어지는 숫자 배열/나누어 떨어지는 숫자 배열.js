function solution(arr, divisor) {
    let newArr = [];
    
    arr.forEach(el => {
        if (el % divisor === 0) {
            newArr.push(el);   
        }
    })
    
    return newArr.length !== 0 ? newArr.sort((a, b) => a - b) : [-1];
}