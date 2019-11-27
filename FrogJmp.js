// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
	const remainder = (Y - X) % D;
	const divider = Math.floor((Y - X) / D);
	if (remainder > 0) {
		return divider + 1;
	} else {
		return divider;
	}
}
