/*

Given an array of integers, every element appears twice except for one. Find that single one.

*/



// Highly Opimized (Beat 100% of the solutions in JavaScript)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var temp = {};
    for (var i=0, l = nums.length; i < l; i++) {
        
        if (temp[nums[i]]) 
           delete temp[nums[i]]; 
        else 
            temp[nums[i]] = 1;
        
    }
    return +Object.keys(temp)[0];
    
};


// Solution non-optimized
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var temp = [];
    for (var i=0, l = nums.length; i < l; i++) {
        var index = temp.indexOf(nums[i]);
        if (index >= 0) {
           temp.splice(index, 1);  
        } else {
            temp.push(nums[i]);
        }
    }
    return temp[0];
    
};
