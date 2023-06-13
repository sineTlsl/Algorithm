function solution(n, edge) {
	// 1. 인접리스트 생성
	const graph = makeGraph(n, edge);
		
	function bfs(start) {
		// 노드를 방문했는지?
		let visited = Array(n + 1).fill(false);
		// start로부터의 거리
		let dist = Array(n + 1).fill(0);

		let queue = [];
		queue.push(start);
		visited[start] = true;

		while(queue.length > 0) {
			let node = queue.shift();
			
			for (let next of graph[node]) {
				if(!visited[next]) {
					queue.push(next);
					dist[next] = dist[node] + 1;
					visited[next] = true;
				}
			}
		}
		return dist; 
	}
    
	let dist = bfs(1);
	const maxDist = Math.max(...dist);
	const result = dist.filter(d => d === maxDist).length;
    
    return result;
}

function makeGraph(n, edge) {
	// 2. 2중 배열
	let adjacentList = Array.from({length: n + 1}, () => []);

	for (let [a, b] of edge) {
		adjacentList[a].push(b);
		adjacentList[b].push(a);
	}
    
	return adjacentList;
}