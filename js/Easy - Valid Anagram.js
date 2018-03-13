/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

*/



// Highly optimized solution - (Your runtime beats 100.00 % of javascript submissions.)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
  if (s === t)
      return true;
    
  if (!s || !t)
    return false;
  
  let n1 = s.length,
      n2 = t.length;
  
  if (n1 != n2)
    return false;
  
  const c1 = {}, c2 ={};
  
  for (let i=0; i<n1; i++) {
    let l1 = s[i], l2 = t[i];
    
    if (c1[l1]) {
      c1[l1] += 1;
    } else {
      c1[l1] =1;
    }
    
    
    if (c2[l2]) {
      c2[l2] += 1;
    } else {
      c2[l2] =1;
    }
    
  }
  
  for (let o in c1) {
    if (c1[o] !== c2[o]) {
      return false;
    }
  }
  
  return true;
  
};