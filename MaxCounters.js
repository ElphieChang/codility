// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let counters = new Array(N).fill(0);
	let maxNum = 0;
	let lastMaxNum = 0;
	
	A.forEach(item => {
		if (item <= N) {
			if (counters[item - 1] < lastMaxNum) {
				counters[item - 1] = lastMaxNum;
			}
			counters[item - 1]++;
			
			if (counters[item - 1] > maxNum) {
				maxNum = counters[item - 1];
			}
		} else {
			lastMaxNum = maxNum;
		}
	});
	
	for (const i in counters) {
		if (counters[i] < lastMaxNum) {
			counters[i] = lastMaxNum;
		}
	}
	
	return counters;
}
