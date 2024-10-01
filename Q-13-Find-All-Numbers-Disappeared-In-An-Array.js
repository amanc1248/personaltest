// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
const findMissingNumber = (nums)=>{
    // first of all sort the nums using cyclic sort.
    let i = 0; 
    while(i<nums.length){
        const correct = nums[i]-1;
        if(nums[i]!==nums[correct]){
            // swap
            const temp  = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        }else{
            i++;
        }
        
    }
    // now find the missing number
    let missingNumbers = [];
    for(let j =0; j<nums.length; j++){
        if(j+1!==nums[j]){
            missingNumbers.push(j+1)
        }
    };
    return missingNumbers;
}
// console.log(findMissingNumber([0,4,3,1,]));
console.log(findMissingNumber([4,3,2,7,8,2,3,1]))