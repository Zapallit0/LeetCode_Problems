// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

//My Solution

var isPalindrome = function(x) {
    let arr=x.toString().split('')
    if(x<0){
        return false
    }
    let copy=arr.reverse().join('')
    if(copy==x){
        return true
    }else{
        return false
    }
};
//In my first attempt i use a for loop but the problem was that i couldnt get all the inputs solutions so i used a copy array with reverse