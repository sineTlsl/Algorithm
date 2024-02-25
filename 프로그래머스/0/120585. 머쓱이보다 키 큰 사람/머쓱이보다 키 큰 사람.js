function solution(array, height) {
    let result = 0;
    
    array.forEach(el => {
        if (height < el) {
            result++;     
        }
    });
    
    return result;
}