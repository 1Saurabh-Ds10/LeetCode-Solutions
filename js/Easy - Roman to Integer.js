/*

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

*/




// Highly optimized solution - (Your runtime beats 100.00 % of javascript submissions.)
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   let number = 0, len = s.length, t1 = '', t2 = '',i = 0;
   const num = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     XL: 40,  
     L: 50,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1
   };
   
 while(i < len) {
   
   t1 = s[i];
   t2 = s[i+1];
      
   if (num[t1+t2]) {
     number+=num[t1+t2];
     i++;
   } else {
    number+=num[t1];
   }
    i++;
  
  }
  return number;
  
};
