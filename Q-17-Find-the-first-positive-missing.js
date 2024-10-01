// https://leetcode.com/problems/missing-number/
const findMissingNumber = (nums) => {
    // first of all sort the nums using cyclic sort.
    let i = 0;
    while (i < nums.length) {
        const correct = nums[i] - 1;
        if (nums[i] <= nums.length && nums[i] !== nums[correct] && nums[i] > 0) {
            // swap
            const temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++;
        }
    }
    // now find the missing number
    for (let j = 0; j < nums.length; j++) {
        if (j + 1 !== nums[j]) {
            return j+1;
        }
    };
    return nums.length+1;
}
// console.log(findMissingNumber([0,4,3,1,]));
console.log(findMissingNumber([3, 4, -1, 1]))