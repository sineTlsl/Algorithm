function solution(s) {
    let result = '';
    
    s.split(' ').forEach(word => {
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                result += word[i].toUpperCase();
            } else {
                result += word[i].toLowerCase();
            }
        }
        result += ' ';
    });
    
    return result.slice(0, result.length - 1);
}