// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

 
//My solution
function isAnagram(s, t) {
    if(s.length!==t.length){
        return false
    }
    a=s.split('').sort() //string to array and sort it
    b=t.split('').sort()
    return JSON.stringify(a)==JSON.stringify(b) //coparing using JSON.stringify this help us to compare
}

//Other solution
var isAnagram = function(s, t) {
    if(s.length !== t.length){ //faster for different sizes
        return false
    }

    const freqMap = new Map();

    for (let char of s){
        freqMap.set(char, (freqMap.get(char) || 0)+1)
    }

    for (let char of t){
        if (!freqMap.has(char) || freqMap.get(char)===0){
            return false
        }
           freqMap.set(char, (freqMap.get(char)-1)   )
    }
    return true
    
};

//The xd solution
var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false
    }
  
    var charArray = Array(26).fill(0)
  
    for(var i = 0; i < s.length;i++) {
        charArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        charArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }
  
    return charArray.every(count => count == 0)
  };