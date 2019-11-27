// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let index = -1;
	let minimumNum = Infinity;
	A.forEach((item, i) => {
		if (i >= 1) {
			const twoAverage = (item + A[i - 1]) / 2;
			if (twoAverage < minimumNum) {
				minimumNum = twoAverage;
				index = i - 1;
			}
		}
		
		if (i > 2) {
			const threeAverage = (item + A[i - 1] + A[i - 2]) / 3;
			if (threeAverage < minimumNum) {
				minimumNum = threeAverage;
				index = i - 2;
			}
		}
	});
	
	return index;
}
