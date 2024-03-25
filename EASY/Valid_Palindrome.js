// A phrase is a palindrome if, after converting all uppercase letters 
//into lowercase letters and removing all non-alphanumeric characters, 
//it reads the same forward and backward. Alphanumeric characters include 
//letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

 
//My Solution
var isPalindrome = function(s) {
    let regexp=s.toLowerCase().match(/[a-z0-9]/g) //here we match all the characters and numbers but the special characters
    if(regexp!=null){ //
        let a=regexp.join('')
        let b=regexp.reverse().join('')
        return a==b
    }
    return true
};

//Other Solutions
var isPalindrome = function (s) {
    let cleanStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); //here is used replace for all the spacial characters like spaces
    let reversedStr = cleanStr.split('').reverse().join('');    


    return cleanStr === reversedStr; //here we just compare the 2 different strings to get tru or false

};