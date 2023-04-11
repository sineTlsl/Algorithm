function solution(n) {
  /* 최소공배수 문제. 유클리드 호제법 사용하기 */
  let pizzaPiece = 6; // 피자는 한 판당 6조각

  // 최대공약수 구하기
  const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);
  // 최소공배수 구하기
  const lcm = n * (pizzaPiece / getGcd(n, pizzaPiece));
    
  return parseInt(lcm / pizzaPiece);
}