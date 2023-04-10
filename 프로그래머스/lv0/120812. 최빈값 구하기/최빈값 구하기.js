function solution(array) {    
    // 객체로 중복 개수 담기  
    // { '1': 1, '2': 1, '3': 3, '4': 1 }
    let cntObj = array.reduce((acc, cur, idx) => {
        acc[cur] = (acc[cur] || 0) + 1;

        return acc;
    }, {});
    
    // 객체의 value가 큰 순으로 key를 내림차순 정렬한다.
    let keySorted = Object.keys(cntObj).sort((a, b) => {
        return cntObj[b] - cntObj[a];
    })
    
    // 최빈값이 여러 개면 -1, 최빈값이 하나면 그 값 출력
    if (cntObj[keySorted[0]] === cntObj[keySorted[1]]) return -1;
    else return Number(keySorted[0]);
}