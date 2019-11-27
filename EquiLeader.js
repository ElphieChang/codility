// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	if (A.length <= 1) {
		return 0;
	}
	let count = 1;
	let leader = A[0];
	
	const B = A.concat([]);
	B.sort((a, b) => a - b);
	for (let i = 1; i < B.length; i++) {
		if (B[i] === B[i - 1]) {
			count++;
			leader = B[i];
		} else if (count > Math.floor(B.length / 2)){
			break;			
		} else {
			count = 1;
			leader = B[i];
		}
	}
	
	if (count <= Math.floor(B.length / 2)) {
		return 0;
	} else {
		let num = 0;
		let equiCount = 0;
		A.forEach((item, index) => {
			if (item === leader) {
				num++;
			}
			
			if (num > Math.floor((index + 1) / 2) && (count - num) > Math.floor((A.length - index - 1) / 2)) {
				equiCount++;
			}
		});
		
		return equiCount;
	}
}
