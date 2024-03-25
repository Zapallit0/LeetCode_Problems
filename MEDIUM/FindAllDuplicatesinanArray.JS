// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Example 2:

// Input: nums = [1,1,2]
// Output: [1]

// Example 3:

// Input: nums = [1]
// Output: []

//My solution

var findDuplicates = function(nums) {
    let duplicates=[]
    let newSet= new Set();
      if(nums.length<=1){
        return duplicates
      }
    for(let i=0;i<nums.length;i++){
      if(!newSet.has(nums[i])){
        newSet.add(nums[i])
      }else{
        duplicates.push(nums[i])
      }
    }
    return duplicates
  };

//Other solution

var findDuplicates = function(nums) {
    let f = new Array(nums.length).fill(0);
    nums.forEach(i => f[i - 1]++);
    let ans = [];
    f.forEach((c, i) => c > 1 && ans.push(i + 1));
    return ans;
};