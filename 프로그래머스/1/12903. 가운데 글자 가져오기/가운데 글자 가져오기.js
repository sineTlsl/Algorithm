function solution(s) {
    const midNum = s.length / 2;
    
    return Number.isInteger(midNum) ? `${s[midNum - 1]}${s[midNum]}` : s[Math.floor(midNum)];
}