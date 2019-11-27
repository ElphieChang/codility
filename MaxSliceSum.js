// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	const tempA = A.concat([]);
	tempA.sort((a, b) => a - b);
	if (tempA[tempA.length - 1] <= 0) {
		return tempA[tempA.length - 1];
	} else {
		let maxNum = 0, maxResult = 0;
		for (let i = 0; i < A.length; i++) {
			maxNum = Math.max(0, maxNum + A[i]);
			maxResult = Math.max(maxResult, maxNum);
		}
		
		return maxResult;
	}
}
