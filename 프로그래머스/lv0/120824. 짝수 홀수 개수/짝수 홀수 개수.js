function solution(num_list) {
    let oddNumber = [];
    let evenNumber = [];
    
    num_list.forEach(num => {
        if (num % 2 === 0) {
            evenNumber.push(num);
        } else {
            oddNumber.push(num);
        }
    })
    
    return [evenNumber.length, oddNumber.length];
}