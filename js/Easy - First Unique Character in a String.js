/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (!s)
      return -1;
  
  const n = s.length;
  const cache = {}; 
    
  for (let i=0; i<n; i++) {
    let t = s[i];
    if (s.slice(i+1).indexOf(t) < 0 && !cache[t])
      return i;
    else 
      cache[t] = i+1;
  }
    
   return -1; 
};