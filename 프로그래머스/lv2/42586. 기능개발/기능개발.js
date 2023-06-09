function solution(progresses, speeds) {
    let featDay = 0;
    let result = [];
    
    progresses.forEach((progress, i) => {
        let day = Math.ceil((100 - progress) / speeds[i]);
        
        if (day > featDay) {
            result.push(1);
            featDay = day;
        } else {
            result[result.length - 1]++;
        }
    })
    
    return result;
}