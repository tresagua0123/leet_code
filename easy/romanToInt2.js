/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let sum = 0;
    const getTwoSetNum = (s) => {
        if(s === "IV") return 4;
        if(s === "IX") return 9;
        if(s === "XL") return 40;
        if(s === "XC") return 90;
        if(s === "CD") return 400;
        if(s === "CM") return 900;
        else return 0;
    }
    for(let i=0; i< s.length; i++) {
        const first = s[i];
        const second = s[i+1]
        if(getTwoSetNum(first + second) === 0) sum += map[first];
        else {
            sum += getTwoSetNum(first + second);
            i++
        }
    }
    return sum;
};

console.log(romanToInt("MCMXCIV"));
