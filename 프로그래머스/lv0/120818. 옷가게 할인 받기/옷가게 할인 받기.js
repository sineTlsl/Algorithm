function solution(price) {
    if (100000 <= price && price < 300000) {
        return Math.floor(price - (price * 0.05)); 
    } else if (300000 <= price && price < 500000) {
        return Math.floor(price - (price * 0.1));
    } else if (price >= 500000) {
        return Math.floor(price - (price * 0.2));
    } else {
        return price;
    }
}