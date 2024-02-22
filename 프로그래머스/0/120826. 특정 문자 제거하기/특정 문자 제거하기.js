function solution(my_string, letter) {
    let result = '';
    
    for (const s of my_string) {
        if (s !== letter) {
            result += s;
        }
    }
    
    return result;
}