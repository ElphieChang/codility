// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let peaks = [];
	for (let i = 1; i < A.length - 1; i++) {
		if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
			peaks.push(i);
		}
	}
	
	if (peaks.length <= 2) {
		return peaks.length;
	}
	
	const size = peaks.length;
	const maxNum = parseInt(Math.sqrt(peaks[size - 1] - peaks[0]) + 1);
	
	for (let i = maxNum; i >= 2; i--) {
		let count = 1;
		let curIdx = peaks[0];
		for (let j = 1; j < size; j++) {
			if (curIdx + i <= peaks[j]) {
				count++;
				curIdx = peaks[j];
			}
		}			
		if (count >= i) {
			return i;
		}		
	}
	
	return 2;
}
