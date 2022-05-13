/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = (s.split(" ")).filter(element => {
        return element !== ''
        })
    return (arr[arr.length -1]).split("").length
};