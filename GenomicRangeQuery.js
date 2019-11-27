// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
	let result = [];
	let aList = [], cList = [], gList = [];
	for (let i = 0; i < S.length; i ++) {
		if (i === 0) {
			aList.push(-1);
			cList.push(-1);
			gList.push(-1);
		} else {
			aList.push(aList[i - 1]);
			cList.push(cList[i - 1]);
			gList.push(gList[i - 1]);
		}
		
		if (S[i] === 'A') {
			aList[i] = i;
		} else if (S[i] === 'C') {
			cList[i] = i;
		} else if (S[i] === 'G') {
			gList[i] = i;
		}
	}
	
	for (let j = 0; j < P.length; j++) {
		const beginIdx = P[j];
		const endIdx = Q[j];
		
		if (aList[endIdx] >= beginIdx) {
			result.push(1)
		} else if (cList[endIdx] >= beginIdx) {
			result.push(2);
		} else if (gList[endIdx] >= beginIdx) {
			result.push(3);
		} else {
			result.push(4);
		}
	}
	
	
	return result;
}

