// Sum of n numbers
// Given an integer n, find and print the sum of numbers from 1 to n.
// Note : Use while loop only.
// Input Format :
// Integer n
// Output Format :
// Sum
// Constraints :
// 1 <= n <= 100
// Sample Input :
// 10
// Sample Output :
// 55


let n =10;
let sum = 0;
while(n!==0){
    sum += n;
    n=n-1;
}

console.log(`sum of this is ${sum}`);

