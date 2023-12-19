function solution(n, k) {
    const converted = n.toString(k)
    const convertedArr = converted.split('0').map(Number);
    let cnt = 0;
    
    convertedArr.forEach(el => {
        if (isPrimeNumber(el)) {
            cnt++;
        }
    });
    
    function isPrimeNumber(num) {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    return cnt;
}