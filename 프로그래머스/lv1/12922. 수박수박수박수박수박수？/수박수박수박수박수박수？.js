function solution(n) {
    let str = "";
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            str += "수"
        } else {
            str += "박";
        }
    }
    
    return str;
}