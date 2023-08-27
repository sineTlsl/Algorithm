function solution(s) {
    let strArr = s.split('');
    let sign = s[0] === '-' ? strArr.shift() : '';
    
    let strNumber = strArr.join('');

    return Number(sign + strNumber);
}