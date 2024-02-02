function solution(s) {
    const alphabet = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five' : 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    
    const result = [];
    let word = '';
    
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            result.push(s[i]);
        } else {
            word += s[i];

            if (alphabet[word] !== undefined) {
                result.push(alphabet[word]);
                word = '';
            }
        }
    }
    
    return Number(result.join(''));
}