// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//My solution
var twoSum = function(nums, target) {
    let a=0;
    for(let i=0;i<nums.length;i++){
        a=nums[i];
        for(let j=i+1;j<=nums.length;j++){
            result=a+nums[j]
            if(result==target){
                return[i,j]
            }
        }
    }
};


//Other solution
var twoSum = function(nums, target) {
    const map = {};//to add the diff
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i] //we get the number to get the target
        if (diff in map) return [i,map[diff]]  //if the difference is in the map we get it from the map but as index
        map[nums[i]] = i //if theres nothing in the map we store the index number, to ask for it in the next iteration 
    }
};