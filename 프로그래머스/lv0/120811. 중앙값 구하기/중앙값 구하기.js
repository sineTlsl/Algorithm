function solution(array) {
    let arrSorted = array.sort((a, b) => (a - b));
    
    return arrSorted[parseInt(arrSorted.length / 2)];
}