const number = 123;
const numString = String(number);
let reversedString = "";

for (let i = numString.length; i > 0; i--) {
  reversedString = reversedString + numString[i - 1];
}
return numString === reversedString;
