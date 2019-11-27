// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let result = 0;
	const Amap = A.map((item, index) => {
		return [index - item, item + index]
	});
	
	Amap.sort((a, b) => {return (a[0] - b[0]) || (a[1] - [1])});
	
	for (let i = 0; i < Amap.length; i++) {
		for (let j = i + 1; j < Amap.length; j++) {
			if (Amap[j][0] <= Amap[i][1]) {			
				result++;
			} else {
				break;
			}
		}			
	}
	
	if (result > 10000000) {
		return -1;
	}
	
	return result;		
}
