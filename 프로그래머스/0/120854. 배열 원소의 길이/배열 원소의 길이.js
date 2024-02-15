function solution(strlist) {
    const result = [];
    
    strlist.forEach(str => {
        result.push(str.length);    
    });
    
    return result;
}