// 지도 크기 = n x n의 정사각형
// 지도의 안에는 공백(' ') or 벽('#')
// 지도1과 지도2 두개 중 하나라도 벽이면 벽
// 지도1과 지도2 두개 다 공백이면 공백
// 암호화 === 벽: 1, 공백: 0

function solution(n, arr1, arr2) {
    const map = [];
    
    for (let i = 0; i < n; i++) {
        let row = '';
        const arr1Hex = arr1[i].toString(2).padStart(n, '0')
        const arr2Hex = arr2[i].toString(2).padStart(n, '0');
        
        for (let j = 0; j < n; j++) {
            if (arr1Hex[j] === '1' || arr2Hex[j] === '1') {
                row += '#';
            } else {
                row += ' ';
            }
        }
        map.push(row);
    }
    
    return map;
}