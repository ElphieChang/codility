function solution(N) {
	let i = 1, result = 0;
	while (i * i <= N) {
		if (N % i === 0) {
			result += 2;
		}
		
		if (i * i === N) {
			result -= 1;
		}
		
		i++;
	}
	
	return result;
}