// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function getInitArray(N) {
	let list = [];
	for (let i = 0; i < N; i++) {
		list.push(0);
	}
	
	return list;
}


function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
	let factor = getInitArray(N + 1);
	for (let i = 2; i * i <= N; i++) {
		if (factor[i] === 0) {
			let f = i * i;
			while (f <= N) {
				if (factor[f] === 0) {
					factor[f] = i;					
				}
				
				f += i;
			}
		}			
	}
	
	let semiNum = getInitArray(N + 1);
	let amount = 0;
	for (let i = 1; i <= N; i++) {
		if (factor[i] !== 0) {
			const data = i / factor[i];
			if (factor[data] === 0) {
				amount++;
			}
		}
		
		semiNum[i] = amount;
	}
	
	let count = P.map(i => 0);
	Q.forEach((item, i) => {
		count[i] = semiNum[item] - semiNum[P[i] - 1];
	});
	
	return count;
}
