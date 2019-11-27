// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let count = 0;
	let numOfEast = 0;
	A.forEach((item, index) => {
		if (item === 0) {
			numOfEast++;
		} else {
			count += numOfEast;
		}
	});
	
	if (count > 1000000000) {
		count = -1;
	}
	return count;
}
