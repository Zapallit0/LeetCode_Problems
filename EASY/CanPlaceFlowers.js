// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

//My Solution
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0;i<flowerbed.length;i++){
        if(n==0) return true;//Here if n is 0 then return true
        let prev = i>0?flowerbed[i-1]: 0 // if the previus number is greater than 0 equals to the [i -1] element 
        let next = i<flowerbed.length-1?flowerbed[i+1]: 0   //for the next number i has to be less than the length of the array-1 otherwise this equals 0
        
        if(prev!=1 && next!=1 && flowerbed[i]!=1){ //after getting the prev and next number we expect not to be 1 to get three 0 together getting 0 space for 1 more flower
            //so if this happens we add a flower and reduce in 1 n
            flowerbed[i] = 1;
            n--;
        }
        //finally we return n if this is 0 or less we true cuz there would be spoace for n flowers, but if this is false is cuz there is no enought space for more flowers
    }

    return n<=0 
};