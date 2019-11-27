// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function loop(a, b) {
	if (a % b === 0) {
		return b;
	} else {
		return loop(b, a % b);
	}
}

function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
	const maxDivisor = N >= M ? loop(N, M) : loop(M, N);
	return N / maxDivisor;
}


