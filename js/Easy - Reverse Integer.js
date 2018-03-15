/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/



// Highly optimized solution - (Your runtime beats 100.00 % of javascript submissions.)
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
 let op =  ((x > 0) ? +String(x).split('').reverse().join('') : +String(x).slice(1).split('').reverse().join('') * -1);
 
  if (op < -2147483648 || op > 2147483647)
    return 0;
  
  return op;
    
};
