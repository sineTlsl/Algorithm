function solution(answers) {
    const resultObj = {
        student1: 0,
        student2: 0,
        student3: 0
    }
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let maxScore = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (student1[i % student1.length] === answers[i]) {
            resultObj.student1++;
            if (resultObj.student1 > maxScore) maxScore = resultObj.student1;
        }
        if (student2[i % student2.length] === answers[i]) {
            resultObj.student2++;
            if (resultObj.student2 > maxScore) maxScore = resultObj.student2;
        }
        if (student3[i % student3.length] === answers[i]) {
            resultObj.student3++;
            if (resultObj.student3 > maxScore) maxScore = resultObj.student3;
        }
    }
    
    let result = []
    
    if (resultObj.student1 === maxScore) result.push(1)
    if (resultObj.student2 === maxScore) result.push(2)
    if (resultObj.student3 === maxScore) result.push(3)
    
    return result;
}