function solution(num) {
    let newNum = num;
    let cnt = 0;
    
    while (newNum !== 1) {
        if (newNum % 2 === 0) {
            newNum = Math.floor(newNum / 2);
        } else {
            newNum = newNum * 3 + 1
        }
        cnt++;
    }
    
    return cnt <= 500 ? cnt : -1;
}