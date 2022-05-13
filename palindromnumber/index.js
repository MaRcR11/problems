/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = parseInt(((x.toString()).split("")).reverse().join(""))

    return x === y
};