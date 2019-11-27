function solution(N) {
	let minMeter = (1 + N) * 2, A = 2;
	while (A * A <= N) {
		if (N % A === 0) {
			const B = N / A;
			minMeter = Math.min(minMeter, (A + B) * 2);
		}
		
		A++;
	}
	
	return minMeter;
}