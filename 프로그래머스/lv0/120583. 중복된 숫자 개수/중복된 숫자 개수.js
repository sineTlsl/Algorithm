function solution(array, n) {
    let cnt = 0;
    
    array.forEach(el => {
        if (el === n) {
            cnt++;
        }
    });
    
    return cnt;
}