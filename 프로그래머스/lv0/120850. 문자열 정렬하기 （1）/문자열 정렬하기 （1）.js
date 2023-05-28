function solution(my_string) {
    let numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [];
    
    [...my_string].forEach(el => {
        let myNum = Number(el);
        
        if (numberArr.includes(myNum)) {
            result.push(myNum);
        }
    })

    return result.sort((a, b) => a - b);
}