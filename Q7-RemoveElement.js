/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0; // Initialize pointer `i` to 0

    // Loop through the array with `j` as the pointer
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            // If current element is not equal to `val`, assign it to `nums[i]`
            nums[i] = nums[j];
            i++; // Increment `i` to the next position
        }
    }

    return i; // Return th
};