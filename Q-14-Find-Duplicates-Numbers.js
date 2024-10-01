//https://leetcode.com/problems/find-the-duplicate-number/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let i = 0;
    while (i < nums.length) {
        const correct = nums[i] - 1;
        if ((nums[i] !== i + 1 && nums[i] === nums[correct])) {
            return nums[i]
        } else if (nums[i] !== nums[correct]) {
            // swap
            const temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++;
        }

    }
};