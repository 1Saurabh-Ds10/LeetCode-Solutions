/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/


// Highly optimized solution - (Your runtime beats 100.00 % of javascript submissions.)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const r = /\{\}|\[\]|\(\)/;
  while(r.test(s))
    s = s.replace(r, '');  
  return !s.length;
};