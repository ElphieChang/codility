// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function loop(a, b) {
	if (a % b === 0) {
		return b;
	} else {
		return loop(b, a % b);
	}
}


function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
	let count = 0, maxDivisor;
	for (let i = 0; i < A.length; i++) {
		if (A[i] !== 1 && B[i] !== 1) {		
			maxDivisor = loop(A[i], B[i]);
			const divisor1 = A[i] / maxDivisor, divisor2 = B[i] / maxDivisor;
			if (maxDivisor % divisor1 === 0 && maxDivisor % divisor2 === 0) {
				count++;
			} else {
				let c = 0, a = A[i], b = B[i];
				while (c !== 1) {
					c = loop(a, maxDivisor);
					a = a / c;					
				}
				
				c = 0;
				while(c !== 1) {
					c = loop(b, maxDivisor);
					b = b / c;
				}
				
				if (a === 1 && b === 1) {
					count++;
				}
			}			
		} else if (A[i] === 1 && B[i] === 1) {
			count++;
		}
	}
	
	return count;
}
