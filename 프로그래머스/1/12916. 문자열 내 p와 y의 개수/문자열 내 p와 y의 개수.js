function solution(s){
    let strP = 0;
    let strY = 0;
    
    for (let el of s) {
        const upperStr = el.toUpperCase();
        
        if (upperStr === "P") {
            strP += 1;
        } else if (upperStr === "Y") {
            strY += 1;
        }
    }
    
    if (strP === 0 && strY === 0) return true;
    else if (strP === strY) return true;
    else return false;
}