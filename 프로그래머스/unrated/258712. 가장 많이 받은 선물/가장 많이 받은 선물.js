function solution(friends, gifts) {
    // 1. 두 사람 사이에서 선물을 많이 주고받은 사람이 상대한테 선물받음 (+1)
    
    // 2. 두 사람 사이에서 선물을 주고 받지 않거나, 주고받은 수가 같다면?
    // 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람한테 선물받음 (+1)
    // 선물 지수: 자신과 친구들에게 준 선물의 수 - 받은 선물의 수
    
    // 예시
    // A <-> B
    // A가 준 선물: 3, 받은 선물: 7    // A의 선물 지수: -7
    // B가 준 선물: 3, 받은 선물: 2    // A의 선물 지수: 1
    
    // 리턴: 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수
    
    let result = 0;
    const obj = [];
    const giftCnt = [];

    friends.forEach(friend => {
        obj[friend] = 0;
    });
    
    console.log(obj);

    return result;
}