// Do permutation and combination in javascript
// Find the next big number after theNumber.
const findTheGreatestNumber = (theNumber) => {
    const convertedNumbers = theNumber.toString().split('');
    const possibleCombinationNumbers = [];
    const findPossibleCombinations = (array, currentIndex) => {
        if (currentIndex === array.length - 1) {
            possibleCombinationNumbers.push(array.join(''));
        } else {
            for (let i = currentIndex; i < array.length; i++) {
                [array[currentIndex], array[i]] = [array[i], array[currentIndex]];
                findPossibleCombinations([...array], currentIndex + 1);
            }
        }
    }
    findPossibleCombinations(convertedNumbers, 0);
    // console.log(possibleCombinationNumbers)

    // sort the array in ascending array;
    const sortedArray = [];
    for (let i = 0; i < possibleCombinationNumbers.length; i++) {
        sortedArray.push(parseInt(possibleCombinationNumbers[i]))
    }
    const finalSortedArray = sortedArray.sort();
    let greatestNumber = 0;
    for (let i = 0; i < finalSortedArray.length; i++) {
        if (finalSortedArray[i] > theNumber) {
            greatestNumber = finalSortedArray[i];
            break;
        }
    }
    return greatestNumber
}
console.log(findTheGreatestNumber(12345));
console.log(findTheGreatestNumber(123));