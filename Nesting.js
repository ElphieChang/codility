// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
	let result = [];
	for (let i = 0; i < S.length; i++) {
		if (S[i] === '(') {
			result.push(S[i]);
		} else {
			if (result.length > 0) {
				result.pop();
			} else {
				result.push(S[i]);
			}
		}		
	}
	
	return result.length === 0 ? 1 : 0;
}
