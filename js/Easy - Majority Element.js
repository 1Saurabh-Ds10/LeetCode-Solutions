/*

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

*/



// Highly - Optimized (Your runtime beats 100.00 % of javascript submissions.)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
      
  if (nums.length === 1)
    return nums[0];
 
  const c = {};
  for (let i=0, n = nums.length; i<n; i++) {
    let num = nums[i], val = c[num];
  
    if (val) {
      c[num] += 1;
        
      if (c[num] > n /2) 
        return num;
      
    } else {
       c[num] = 1;
    }  
   
  }
  
};