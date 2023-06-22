function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    let strArr = s.toLowerCase();
    
    [...strArr].forEach(str => {
        if ('p' === str) pCnt++;
        else if ('y' === str) yCnt++;
    });
     
    return pCnt === yCnt || (pCnt === 0 && yCnt === 0) ? true : false;
}