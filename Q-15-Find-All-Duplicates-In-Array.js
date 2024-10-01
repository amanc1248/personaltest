/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let i = 0;
    let duplicatesNumber = [];
    while (i < nums.length) {
        const correct = nums[i] - 1;
        if ((nums[i] !== i + 1 && nums[i] === nums[correct])) {
            duplicatesNumber.push(nums[i]);
            i++
        } else if (nums[i] !== nums[correct]) {
            // swap
            const temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++;
        }
    }
    let dups = [];
    // all the elements that are in correct index are my answer.
    for(let j = 0; j<nums.length; j++){
        if(j+1!==nums[j])dups.push(nums[j]);
    }
    return dups;
};