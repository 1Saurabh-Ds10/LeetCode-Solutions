/*

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/


// Optimized Solution - 3/4 times its showing (Your runtime beats 100.00 % of javascript submissions.)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
  if (nums.length <= k)
      return nums;
      const c = {};
  
   for (let i=0, n = nums.length; i < n; i++) {
    let e = nums[i];
    if (c[e]) 
         c[e] += 1;
    else 
        c[e] = 1;
   
   }

   let val = Object.values(c);
   let keys = Object.keys(c);
   let res = [];
   return val.map((a, i) => ({ key: +keys[i], val: a })).sort((a, b) => b.val - a.val).slice(0, k).map(a => a.key); 
  
};
