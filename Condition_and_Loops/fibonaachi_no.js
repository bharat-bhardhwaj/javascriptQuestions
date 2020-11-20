// Nth Fibonacci number
// Send Feedback
// Nth term of fibonacci series F(n) is calculated using following formula -
//     F(n) = F(n-1) + F(n-2),
//     Where, F(1) = F(2) = 1
// Provided N you have to find out the Nth Fibonacci Number.
// Input Format :
// Integer n
// Output Format :
// Nth Fibonacci term i.e. F(n)
// Constraints:
// 1 <= n <= 25
// Sample Input 1:
// 4
// Sample Output 2:
// 3
// Sample Input 1:
// 6
// Sample Output 2:
// 8

let n = 6
let first = 0
let second = 1

let i = 2
let ans = 0
while (i <= n) {
  ans = first + second

  first = second
  second = ans
  i = i + 1
}
console.log(ans)
