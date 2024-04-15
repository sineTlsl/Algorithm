// 바로 앞 번호나 뒷 번호에게만 빌려줄 수 있음

function solution(n, lost, reserve) {
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    let result = n - realLost.length;
    
    realLost.forEach(stu => {
        const prev = realReserve.indexOf(stu - 1);
        const next = realReserve.indexOf(stu + 1);

        if (prev !== -1) {
            realReserve.splice(prev, 1);
            result ++;
        } else if (next !== -1) {
            realReserve.splice(next, 1);
            result ++;
        }
        
    });
    
    return result;
}