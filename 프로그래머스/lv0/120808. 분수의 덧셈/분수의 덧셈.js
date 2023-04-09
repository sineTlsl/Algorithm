function solution(numer1, denom1, numer2, denom2) {
    /* 최대 공약수 문제. 유클리드 호제법 사용하기 */
    
    // 1. 두 분모의 곱을 공통분모로 하여 값을 계산한다.
    let top = numer1 * denom2 + numer2 * denom1;  // 분자 구하기
    let bottom = denom1 * denom2; // 분모 구하기
    
    // 2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.
    const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);
    let gcd = getGcd(top, bottom);
    
    return [top/gcd, bottom/gcd];
}