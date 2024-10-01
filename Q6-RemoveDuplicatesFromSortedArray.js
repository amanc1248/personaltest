/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     const finalList = [];
//     let startIndex = 0;
//     while (startIndex < nums.length) {
//         let current = nums[startIndex];
//         if (startIndex == nums.length - 1) {
//             finalList.push(nums[nums.length - 1]);
//             break;
//         }
//         let after = nums[startIndex + 1];
//         if (current === after) {
//             startIndex++;
//         } else {
//             finalList.push(current);
//             startIndex++;
//         }
//     }
//     // for (let i = 0; i < nums.length; i++) {
//     //     if (i > finalList.length-1) {
//     //         finalList.push("_");
//     //     }
//     // }
//     return finalList;
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let count = 1; // Initialize the count of unique elements to 1
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[count - 1]) {
//       nums[count] = nums[i];
//       count++;
//     }
//   }
//   console.log(nums)
//   return count;
// };
var removeDuplicates = function (nums) {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if(nums[i]!==nums[count-1]){
      nums[count] = nums[i];
      count++
    }
  }
  return count
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([1,1,2]));