function solution(rsp) {
    const rock = "0";
    const paper = "5"; 
    const scissors = "2";
    let result = "";
    
    for (let str of rsp) {
        if (str === scissors) {
            result += rock;
        } else if (str === rock) {
            result += paper;
        } else {
            result += scissors;
        }
    }
    
    return result;
}