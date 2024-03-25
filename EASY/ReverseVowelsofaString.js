// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"

// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

//My solution

var reverseVowels = function(s) {
    const vowels = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/ig, el=> vowels.pop()); //here using a replacer function
};                                                    //we replace it with the last element using pop 
                                                    // like in reverse we add all the vowels backwards