// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
	let blocks = 0;
	let stackNums = 0;
	let stacks = [];

	
	for (let i = 0; i < S.length; i++) {
		while (stackNums > 0 && stacks[stackNums - 1] > S[i]) {
			stackNums--;
		}
		
		if (stackNums > 0 && stacks[stackNums - 1] === S[i]) {
			continue;
		} else {
			stacks[stackNums] = S[i];
			stackNums++;
			blocks++;
		}
	}
	
	return blocks;
}
