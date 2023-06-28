function solution(phone_number) {
    const sliceLength = phone_number.length - 4
    let result = '*'.repeat(sliceLength);
    
    result += phone_number.slice(sliceLength);

    return result;
}