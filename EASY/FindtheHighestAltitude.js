// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 

// Example 1:

// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

//My Solution
var largestAltitude = function(gain) {
    let sum=0;      //we initialize 2 variables here for the sum as the relative altitude
    let n=0;        //another variable to get the greatest
    for(let i=0;i<gain.length;i++){ //we get
      sum+=gain [i]
      if(sum>n){//here we compare it with the actual greatest number 
        n=sum //if this is grater we change n
      }
    }
    return n
  };
  console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))

  //Most of ther answers are similar just changing few things or vartiables names
