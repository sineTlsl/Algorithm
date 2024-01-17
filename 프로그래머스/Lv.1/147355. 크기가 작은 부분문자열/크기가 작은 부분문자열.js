function solution(t, p) {
    let cnt = 0;
    
    for (let i = 0; i < t.length - (p.length-1); i++) {
        const num = Number(t.slice(i, i + p.length));
        
        if (num <= Number(p)) {
            cnt ++;
        }
    }
    
    return cnt;
}