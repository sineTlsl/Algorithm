function solution(num_list) {
    let even = 0;
    let add = 0;
    
    num_list.forEach(num => {
        if (num % 2 === 0) {
            even++;
        } else {
            add++;
        }
    });
    
    return [even, add];
}