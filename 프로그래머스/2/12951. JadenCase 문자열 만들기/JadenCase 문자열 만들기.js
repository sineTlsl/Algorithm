function solution(s) {
    const sArr = s.split(' ');
    let result = [];
    
    for (let i = 0; i < sArr.length; i++) {
        const arr = sArr[i].split('').map(el => el.toLowerCase());
        
        if(sArr[i][0]) {
            arr[0] = sArr[i][0].toUpperCase();
        }
        
        result.push(arr.join(''));
    };
    
    return result.join(' ');
}