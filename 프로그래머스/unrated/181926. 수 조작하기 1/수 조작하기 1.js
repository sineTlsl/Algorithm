function solution(n, control) {
    let result = n;
    
    for (const el of control) {
        switch (el) {
            case 'w':
                result += 1;
                break;
            case 's':
                result += -1;
                break;
            case 'd':
                result += 10;
                break;
            case 'a':
                result += -10;
                break;
        }
    }
    return result;
}