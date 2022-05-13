/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0
    let found = 0
    for(let x=0;x<nums.length;x++){
        if(found === 1){
            x=0
            found = 0
        }
        if(nums[x]===0){
            console.log(nums)
            count++
            nums.splice(x,1)
            found = 1
        }
    }
    while(count!=0){
        nums.push(0)
        count--
    }
    console.log(nums)
};