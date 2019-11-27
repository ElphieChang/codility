// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	const Amap = {};
	A.forEach(item => {
		if (!Amap[item]) {
			Amap[item] = 1;
		} else {
			Amap[item] += 1;
		}
	});
	
	let sums = {};
	const length = A.length;
	Object.keys(Amap).forEach(item => {
		let i = 1, count = 0;
		while (i * i <= item) {
			if (item % i === 0) {
				if (Amap[i]) {
					count += Amap[i];
				}
				
				if (item / i !== i && Amap[item / i]) {
					count += Amap[item / i];
				}
			}
			
			i++;
		}
		
		sums[item] = length - count;
	});
	
	let result = [];
	A.forEach(item => {
		result.push(sums[item]);
	});
	
	return result;
}
