/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

/**
 * @param {string} target
 * @return {boolean}
 */
    const doesAllIncludeTarget = (target) => {
        const targetLength = target.length;
        return strs.every((str) => str.slice(0, targetLength) === target)
    }
    
    let maxLength = 0;
    let result = "";

    for(let str of strs){
        let string = ""
        for(let letter of str){
            string = string + letter;
            if(doesAllIncludeTarget(string) && string.length > maxLength) {
                result = string;
                maxLength = string.length;
            }
        }
    }
    console.log(result)
    return result;
};

strs = ["flower","flow","flight"]
longestCommonPrefix(strs)