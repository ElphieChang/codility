// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let nums = [];
	let maxNum = 0;
	A.forEach(item => {
		if (item > 0) {
			if (!nums[item - 1]) {
				nums[item - 1] = true;
			}
		}
		
		if (item > maxNum) {
			maxNum = item;
		}
	});
	
	const index = nums.findIndex(item => !item);
	if (index > -1) {
		return index + 1;
	} else {
		return maxNum > 0 ? (maxNum + 1) : 1;
	}
}
