// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let count = 1;
	let result = A.length > 0 ? 0 : -1;
	const Amap = A.map((item, index) => {return [index, item]});
	Amap.sort((a, b) => a[1] - b[1]);

	for (let i = 1; i < Amap.length; i++) {
		if (Amap[i][1] === Amap[i - 1][1]) {
			count++;
			result = Amap[i][0];
		} else if (count > Math.floor(Amap.length / 2)) {
			break;
		} else {
			count = 1;
			result = Amap[i][0];
			continue;
		}
	}
	
	return count > Math.floor(Amap.length / 2) ? result : -1;
}
