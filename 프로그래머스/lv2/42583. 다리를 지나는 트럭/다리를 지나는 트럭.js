function solution(bridge_length, weight, truck_weights) {
	// 다리를 건너는 트럭의 무게와 위피를 저장.
	let bridge = [];
	let total_weight = 0;
	let time = 0;

	// 다리 위에 차가 있거나 다리를 지나가지 않은 트럭이 있을 경우
	while (bridge.length > 0 || truck_weights.length > 0) {
		time++;

		// bridge[i][0] = 무게, bridge[i][1] = 시간 + 거리
		for (let i = 0; i < bridge.length; i++) {
			bridge[i][1]++;
		}

		// 출차
		if (bridge[0] && bridge[0][1] >= bridge_length) {
			const truck = bridge.shift();
			total_weight -= truck[0];
		}	
	
		// 입차
		if (truck_weights.length > 0 && 
			total_weight + truck_weights[0] <= weight) {
			
			let truck_weight = truck_weights.shift();
			bridge.push([truck_weight, 0]);
			total_weight += truck_weight;
		}
	}
    
    return time;
}