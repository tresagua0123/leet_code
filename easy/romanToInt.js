/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let array = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let first = array[s[i]];
    let second = array[s[i + 1]];

    if (second > first) {
      sum = sum + second - first;
      i++;
    } else {
      sum += first;
    }
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));

