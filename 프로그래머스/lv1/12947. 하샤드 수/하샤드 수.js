function solution(x) {
    let xStr = x.toString().split('');
    let result = 0;
    
    xStr.forEach(str => {
        result += parseInt(str);
    })
    
    return x % result === 0 ? true : false;
}