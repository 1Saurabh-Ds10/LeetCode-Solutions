/*

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 


*/



// Highly Optimized - Your runtime beats 100.00 % of javascript submissions.
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const t = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let sum = 0, c = 0;
  for (let i=s.split('').length - 1; i>=0; i--) {
    let idx = t.indexOf(s[i]);
    sum += (c === 0) ? idx :  (Math.pow(26, c) * idx);
    c++;  
  }
  return sum;
    
 
};