/*

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

*/



// Highly optimized solution -(Your runtime beats 100.00 % of javascript submissions.)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (!nums || nums.length == 0)
    return false;
  
  const cache = {};
  
  for (let i=0, l = nums.length; i <l; i++) {
    let n = nums[i];
      
    if (cache[n]) 
      return true;
    else
      cache[n] = 1;
    
  }
 return false;
};


// other good solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    
    for (let n of nums) {
        if (set.has(n)) {
            return true;
        }
        set.add(n);
    }
    return false;
    
};