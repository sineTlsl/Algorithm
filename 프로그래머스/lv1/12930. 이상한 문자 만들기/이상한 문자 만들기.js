function solution(s) {
    let word = s.split(" ");
    let result = [];
    
    word.forEach(el => {
        let newWord = '';
        let trimEl = el.toString().trim();
        for (let i = 0; i < trimEl.length; i++) {
            if (i % 2 === 0) {
                newWord += trimEl[i].toUpperCase();
            } else {
                newWord += trimEl[i].toLowerCase();
            }
        }
        result.push(newWord);
    })
    return result.join(" ");
}