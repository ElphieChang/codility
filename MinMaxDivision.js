// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function count(mid, A) {
	let k = 1, sum = 0;
	for (let i = 0; i < A.length; i++) {
		sum += A[i];
		if (sum > mid) {
			k++;
			sum = A[i];
		}
	}
	
	return k;
}

function solution(K, M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let maxSum = A.reduce((item, sum) => item + sum, 0);
	
	let maxNum = Math.max(...A);
	
	if (K === 1 || A.length === 1) {
		return maxSum
	} else if (K > A.length) {
		return maxNum;
	} else {
		while (maxNum <= maxSum) {
			const middleNum = Math.floor((maxNum + maxSum) / 2);
			const num = count(middleNum, A);
			if (num <= K) {
				maxSum = middleNum - 1;
			} else {
				maxNum = middleNum + 1;
			}
		}
		
		return maxNum;
	}
	
}
