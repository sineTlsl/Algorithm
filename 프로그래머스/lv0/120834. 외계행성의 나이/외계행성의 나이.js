function solution(age) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let ageStr = age.toString().split("");
    let result = [];
    
    ageStr.forEach(el => {
        result.push(alpha[Number(el)]);
    })
    
    return result.join("");
}