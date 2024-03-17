function solution(price) {
    if (price >= 500000) {
        return Math.floor(price - price * 0.2);
    } else if (500000 > price && price >= 300000) {
        return Math.floor(price - price * 0.1);
    } else if (300000 > price && price >= 100000) {
        return Math.floor(price - price * 0.05);
    } else {
        return price;
    }
}