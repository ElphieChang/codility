function solution(A) {
	let peaks = [];
	for (let i = 1; i < A.length - 1; i++) {
		if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
			peaks.push(i);
		}
	}
	
	if (peaks.length === 0) {
		return 0;
	}
	
	const length = A.length;
	let K = 2, max = 1;
	while (K * K <= length) {
		if (length % K === 0) {
			const distance = length / K;
			let count = 0, count1 = 0;
			peaks.forEach(item => {
				if (distance * count <= item && (count + 1) * distance > item) {
					count++;
				}
				
				if (K * count1 <= item && (count1 + 1) * K > item) {
					count1++;
				}
			});
			
			if (count === K) {
				max = Math.max(max, K);
			}
			
			if (count1 === distance) {
				max = Math.max(max, distance);
			}
		}
		
		K++;
	}
	
	return max;
}