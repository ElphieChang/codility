// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let positiveMaxNums0 = [-1, -1, -1];
	let positiveMaxNums1 = [-1, -1, -1];
	let negativeMaxNums0 = [-1, -1, -1];
	let negativeMaxNums1 = [-1, -1, -1];
	A.forEach((item, i) => {
		if (item >= 0) {
			if (positiveMaxNums0[2] === -1 || A[positiveMaxNums0[2]] < item) {
				positiveMaxNums0[0] = positiveMaxNums0[1];
				positiveMaxNums0[1] = positiveMaxNums0[2];			
				positiveMaxNums0[2] = i;
			} else if (positiveMaxNums0[1] === -1 || A[positiveMaxNums0[1]] < item){
				positiveMaxNums0[0] = positiveMaxNums0[1];
				positiveMaxNums0[1] = i;
			} else if (positiveMaxNums0[0] === -1 || A[positiveMaxNums0[0]] < item) {
				positiveMaxNums0[0] = i;
			}
			
			if (positiveMaxNums1[0] === -1 || A[positiveMaxNums1[0]] > item) {
				positiveMaxNums1[0] = i;
			} else if (positiveMaxNums1[1] === -1 || A[positiveMaxNums1[1]] > item){
				positiveMaxNums1[1] = i;
			} else if (positiveMaxNums1[2] === -1 || A[positiveMaxNums1[2]] > item) {
				positiveMaxNums1[2] = i;
			}
		} else {
			if (negativeMaxNums0[2] === -1 || A[negativeMaxNums0[2]] > item) {
				negativeMaxNums0[0] = negativeMaxNums0[1];
				negativeMaxNums0[1] = negativeMaxNums0[2];
				negativeMaxNums0[2] = i;
			} else if (negativeMaxNums0[1] === -1 || A[negativeMaxNums0[1]] > item) {
				negativeMaxNums0[0] = negativeMaxNums0[1];
				negativeMaxNums0[1] = i;
			} else if (negativeMaxNums0[0] === -1 || A[negativeMaxNums0[0]] > item) {
				negativeMaxNums0[0] = i;
			}
			
			if (negativeMaxNums1[2] === -1 || A[negativeMaxNums1[2]] < item) {
				negativeMaxNums1[0] = negativeMaxNums1[1];
				negativeMaxNums1[1] = negativeMaxNums1[2];	
				negativeMaxNums1[2] = i;
			} else if (negativeMaxNums1[1] === -1 || A[negativeMaxNums1[1]] < item) {
				negativeMaxNums1[0] = negativeMaxNums1[1];
				negativeMaxNums1[1] = i;
			} else if (negativeMaxNums1[0] === -1 || A[negativeMaxNums1[0]] < item) {
				negativeMaxNums1[0] = i;
			}
		}
	});
	
	const num1 = positiveMaxNums0.filter((item) => item !== -1).length;
	const num2 = negativeMaxNums0.filter((item) => item !== -1).length;
	
	if (num1 === 0) {
		return A[negativeMaxNums1[0]] * A[negativeMaxNums1[1]] * A[negativeMaxNums1[2]];
	} else if (num2 === 0) {
		return A[positiveMaxNums0[0]] * A[positiveMaxNums0[1]] * A[positiveMaxNums0[2]];
	} else if (num1 === 1) {
		return A[positiveMaxNums0[2]] * A[negativeMaxNums0[2]] * A[negativeMaxNums0[1]];
	} else if (num1 === 2) {
		if (num2 === 1) {
			return A[negativeMaxNums1[2]] * A[positiveMaxNums1[0]] * A[positiveMaxNums1[1]];
		} else {
			return A[positiveMaxNums0[2]] * A[negativeMaxNums0[1]] * A[negativeMaxNums0[2]];
		}		
	} else if (num1 === 3) {
		const multiple1 = A[positiveMaxNums0[0]] * A[positiveMaxNums0[1]] * A[positiveMaxNums0[2]];
		if (num2 === 1) {
			return multiple1;
		} else {
			const multiple2 = A[positiveMaxNums0[2]] * A[negativeMaxNums0[1]] * A[negativeMaxNums0[2]];
			return multiple1 > multiple2 ? multiple1 : multiple2;
		}
	}
}

