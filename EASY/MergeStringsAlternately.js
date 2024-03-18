// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
//If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

//My Solution:
function mergeAlternately (word1, word2) {
    let arr1=word1.split('');
    let arr2=word2.split('');
    let newArray=[]
    let bigger=0;
    
    if(arr1.length==arr2.length){
      bigger=arr2.length
    }else if(arr1.length>arr2.length){ //get the bigger array to use it in the for loop
      bigger=arr1.length
    }
    else{
      bigger=arr2.length
    }
    for(let i=0;i<bigger;i++){
      if(arr1[i]!=null){ //push all the elemenst in the array just if is not null
       newArray.push(arr1[i])
      }
      if(arr2[i]!=null){
        newArray.push(arr2[i])
      }
    }
    return newArray.join('')
  };
  
  console.log(mergeAlternately('abc','pqr'))
  
//Instead of an array we can treat words as arrays it works just fine

//Other Solutions

var mergeAlternately = function(word1, word2) {
    let minLen = Math.min(word1.length, word2.length); //Here we use Math.min to compare the length of words
    let final = "";
    for(let i = 0; i < minLen; i++){ //Just push the words till the smaller word
        final+= word1[i];
        final += word2[i];
    }

    if(minLen == word1.length){
        final += word2.substring(minLen); //using substring add the rest of the elements
    }
    else{
        final += word1.substring(minLen);
    }
    return final;//return all just as word not array
};
  
  
  
