// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let elementMap = {};
	A.forEach(item => {
		if (!elementMap[item]) {
			elementMap[item] = true;
		}
	});
	
	return Object.keys(elementMap).length;
}
