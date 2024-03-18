// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

//My solution
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 != str2+str1)return '' 
   let a=str1.length
   let b=str2.length
   let gcd =function(x,y){ //using recursion we get the common divisor
     if(!y)return x
     return gcd(y,x%y) //till we get the smallest number for the strings 
   }
 
   let div=gcd(a,b) //using the size of the strings we the divisor
   return str1.slice(0,div) // we use slice method to get the part of the string as common divisor
};

//Other solutions
var gcdOfStrings = function(str1, str2) {
    // step1: find the shorter string as initial divisor
    const divider = str1.length > str2.length ? str1 : str2
    const divisor = str1.length > str2.length ? str2 : str1
    // step2: check if included ? step3 : return ''
    if (!divider.includes(divisor)) return ''
    // step3: check if divider length can be divided by divisor ? check if can concat by the length diff times : step4
    if (divider.length % divisor.length === 0) { 
      let concat = ''
      for (i =1;i<=divider.length / divisor.length; i++) {
        concat += divisor
      }
      return concat === divider ? divisor : ''
    }
    // step4: recursion for replacing string
    return gcdOfStrings(divisor, divider.replace(divisor,''))
};