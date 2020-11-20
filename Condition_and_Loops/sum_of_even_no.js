// Sum of Even Numbers

// Given a number N, print sum of all even numbers from 1 to N.
// Input Format :
// Integer N
// Output Format :
// Required Sum 
// Sample Input 1 :
//  6
// Sample Output 1 :
// 12


let n = 6;
let sum = 0;

while(n !==0){
    if(n%2==0){
        sum += n;
    }
    n=n-1;
}

console.log(sum);