function binarySearch(min, max, nails) {
	let res = -1;	
	for (let i = min; i <= max; i++) {
		if (nails[i] !== -1) {
			res = res !== -1 ? Math.min(nails[i], res) : nails[i];
		}
	}
		
	return res;	
}

function solution(A, B, C) {
	let count = -1;
	let nails = new Array(2 * C.length + 1).fill(-1);
	for (let i = C.length - 1; i >= 0; i--) {
		nails[C[i]] = i;
	}
	
	for (let i = 0; i < A.length; i++) {
		const result = binarySearch(A[i], B[i], nails);
		if (result === -1) {
			return -1;
		} else {
			count = Math.max(count, result);
		}
	}
	
	return count + 1;	
}