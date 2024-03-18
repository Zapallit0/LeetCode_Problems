// Given an integer array nums, return 
// true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

 
//My Solution works for small arrays
function containsDuplicate(nums) {
    nums.sort((a,b)=>a-b) //to get all the duplicates together
    let a=0; //this can be ignore with the if
    for(let i=0;i<nums.length;i++){
        // a=nums[i]
        // for(let j=i+1;j<=nums.length;j++){
        //     if(a==nums[j]){
        //         return true
        //         break
        //     }
        // }
        if(nums[i]===nums[i+1]){ //cuz the sort this should work better and faster than other for loop
            return true;
            break //if this works kills the loop faster
        }
    }
    return false
};

// Solution using Set obj 
function setSolution(nums) {
    let testSet = new Set(nums);
    return testSet.size !== nums.length;
  }
// Set does not support equal elements so if there is any the size will be different
