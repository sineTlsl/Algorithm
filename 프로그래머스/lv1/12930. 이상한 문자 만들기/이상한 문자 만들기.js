function solution(s) {
    let word = s.split(" ");
    let result = [];
    
    word.forEach(el => {
        let newWord = '';
        
        for (let i = 0; i < el.length; i++) {
            if (i % 2 === 0) {
                newWord += el[i].toUpperCase();
            } else {
                newWord += el[i].toLowerCase();
            }
        }
        result.push(newWord);
    })
    return result.join(" ");
}