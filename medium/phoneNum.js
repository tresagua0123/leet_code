digits = "234";

let letterCombinations = function (digits) {
  if (!digits.length) return [];

  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = [];

  function permute(string, index) {
    if (index === digits.length) {
      result.push(string);
      return;
    }

    for (let x of map[digits[index]]) {
      permute(string + x, index + 1);
    }
  }
  permute("", 0);
  return result;
};

// function letterCombinations(digits) {
//   if (digits == "") {
//     return [];
//   }
//   let table = [
//     "0",
//     "1",
//     "abc",
//     "def",
//     "ghi",
//     "jkl",
//     "mno",
//     "pqrs",
//     "tuv",
//     "wxyz",
//   ];

//   let res = [];
//   let que = [""];

//   while (que.length > 0) {
//     let str = que[0];
//     que.shift();

//     if (str.length == digits.length) {
//       res.push(str); // if all digits are replaced with char push to result
//     } else {
//       //             get the current number from the digits i.e if str.length = 2 , digits =123 s= 3
//       let s = Number(digits.charAt(str.length));
//       let val = table[s]; // get char from the table i.e def for s =3

//       for (i = 0; i < val.length; i++) {
//         que.push(str + val.charAt(i));
//       }
//     }
//   }

//   return res;
// }

console.log(letterCombinations(digits));
