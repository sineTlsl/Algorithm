function solution(hp) {
    let ant5 = parseInt(hp / 5);
    hp = hp % 5;
    let ant3 = parseInt(hp / 3);
    hp = hp % 3;
    
    return ant5 + ant3 + hp;
}