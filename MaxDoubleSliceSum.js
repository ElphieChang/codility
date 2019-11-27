// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let a1 = A.map(i => 0);
    let a2 = A.map(i => 0);
    
    for (let i = 1, iR = A.length - 2; iR > 1; i++, iR--) {
        a1[i] = Math.max(A[i] + a1[i - 1], 0);
        a2[iR] = Math.max(A[iR] + a2[iR + 1], 0);
    }
    
    let maxNum = a1[0] + a2[2]; 
    for (let i = 2; i < A.length - 1; i++) {
        maxNum = Math.max(a1[i - 1] + a2[i + 1], maxNum)
    }
    
    return maxNum;
}
