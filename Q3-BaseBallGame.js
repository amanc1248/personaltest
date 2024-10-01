// https://leetcode.com/problems/baseball-game/
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const finalArray = [];
for(let i = 0; i<operations.length; i++){
    const currentElement = operations[i];
    const isCurElemInteger = Number.isInteger(parseInt(currentElement));
    const isCurElemC = currentElement === 'C';
    const isCurElemD = currentElement === 'D';
    const isCurElemOp = currentElement === '+';
    if(isCurElemInteger){
        finalArray.push(parseInt(currentElement));
    }
    if(isCurElemC){
        finalArray.pop();
    }
    if(isCurElemD){
        finalArray.push(finalArray[finalArray.length-1]*2)
    }
    if(isCurElemOp){
        finalArray.push(finalArray[finalArray.length-1]+finalArray[finalArray.length-2]);
    }
    
}
return stack.reduce((sum, num) => sum + num, 0);
};

// improvised version
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPointsImprovised = function(operations) {
    const stack = [];
    
    for (const operation of operations) {
        if (operation === 'C') {
            stack.pop();
        } else if (operation === 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } else if (operation === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(parseInt(operation, 10));
        }
    }
    
    return stack.reduce((sum, num) => sum + num, 0);
};
