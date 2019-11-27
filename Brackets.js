// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
	const bracketsMap = {
		'(': ')',
		'{': '}',
		'[': ']'
	};	
	
	let result = [];
	
	for (let i = 0; i < S.length; i++) {
		if (bracketsMap.hasOwnProperty(S[i])) {
			result.push(S[i]);
		} else if (bracketsMap[result[result.length - 1]] === S[i]) {
			result.pop();
		} else {
			return 0;
		}
	}
	
	return result.length > 0 ? 0 : 1;
}
