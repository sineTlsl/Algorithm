function solution(n, times) {
	// tiems를 오름차순으로 변경한다.
	// (a-b)가 0보다 크면 순서 변경
	times.sort((a, b) => a - b);

	let minTime = times[0]; // 가장 빠른 심사관의 심사 시간
	let maxTime = times[times.length - 1] * n; // 가장 느린시간 // 최대 시간
	let result = maxTime;

	while (minTime <= maxTime) {
		let midTime = Math.floor((minTime + maxTime) / 2);
		let cnt = 0;

		for (let time of times) {
			cnt += Math.floor(midTime / time);	
		}

		if (cnt >= n) { // 현재 값이 기준을 충족했을 경우
			result = midTime;
			maxTime = midTime - 1; 
		} else { // 현재 값이 기준을 충족하지 못할 경우
			minTime = midTime + 1;
		}
	}
    
    return result;
}