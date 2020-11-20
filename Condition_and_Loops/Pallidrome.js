// Palindrome number

// Write a program to determine if given number is palindrome or not. Print true if it is palindrome, false otherwise.
// Palindrome are the numbers for which reverse is exactly same as the original one. For eg. 121
// Sample Input 1 :
// 121
// Sample Output 1 :
// true
// Sample Input 2 :
// 1032
// Sample Output 2 :
// false

let ans = 1234;
let ans2 =ans
var number=0
var number2 =0

while(ans !== 0){
    let rem = ans % 10;
    number = number + rem;
    number2 =number;

    number = number *10

    ans = parseInt(ans/10)
  

}
console.log(number2,ans2)
if(number2 === ans2 ){
    
    console.log(true)
}else{
    console.log(false);
}