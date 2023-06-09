/* 요구사항분석 */
// 1. 배열 숫자가 0~9까지 주어질 때, 연속으로!! 중복되는 숫자는 하나만 남기고 다 지운다.
// 2. 중복된 숫자를 제거되어도 배열 원소 순서를 유지해야 한다. => 큐

function solution(arr) {
    let result = [];
    
    arr.map((el, i) => {
        if (arr[i - 1] !== el) {
            result.push(el);
        }
    })
            
    return result;
}