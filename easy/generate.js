/**
 * https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let resultArray = [];
    if(numRows === 1) {
        resultArray = [[1]]
        return resultArray;
    } else if(numRows === 2) {
        resultArray = [[1], [1]]
        return resultArray;
    } else if(numRows === 3) {
        resultArray = [[1], [1, 1], [1, 2, 1]]
        return resultArray;
    } 
    else {
        resultArray = [[1], [1, 1], [1, 2, 1]]
    }

    for(let i = 3; i < numRows; i++){
        const array = [1]
        for(let j = 1; j <= i-1; j++){
            const num = resultArray[i-1][j-1] + resultArray[i-1][j];
            array.push(num)
            if(j === i - 1) {
                array.push(1)
                resultArray.push(array)}
        }
    }
    return resultArray;
};

const result = generate(6);
console.log("result", result)
