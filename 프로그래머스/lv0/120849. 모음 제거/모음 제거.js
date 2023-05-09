function solution(my_string) {
    var answer = '';
    let alphabet = ["a", "e", "i", "o", "u"];
    
    [...my_string].forEach(el => {
        if (!alphabet.includes(el)) {
            answer += el;
        }     
    })
    
    return answer;
}