// In javascript.
// 1. Conver string to number.
// 2. Determine if variable is an integer.
// 3. check if variable is an alphabetical letter
// 4. check if subStrings exist in another string

// 1. Convert string to number
let number = "88";
console.log("Converted string to number is: ", parseInt(number));
console.log("Converted type from string to number is: ", typeof parseInt(number));

// 2. determine if variable is an integer
let convertedNumber = parseInt("7890");
console.log("It is number: ", Number.isInteger(convertedNumber));

// 3. check if variable is an alphabetical letter
let letter = "r";
let capitalLetter = "R";
console.log(`The letter ${letter} is alphabetical letter: `, /^[a-zA-Z]$/.test(letter))
console.log(`The letter ${capitalLetter} is alphabetical letter: `, /^[a-zA-Z]$/.test(capitalLetter))

console.log("***************Failing Case**************");
console.log(`The letter ${capitalLetter} is alphabetical letter: `, /^[a-zA-Z]$/.test("12"))
console.log(`The letter ${capitalLetter} is alphabetical letter: `, /^[a-zA-Z]$/.test("990"))

// 4. check if string exists in another string
let string1 = "The string exists here";
let string2 = "The string does not exists here";
console.log(string1.includes("The String")); // return false because S is upper case.
console.log(string2.includes("The string")); // return true because the matching is case sensitive.

// 5. find the sub string from an string/array
let subString1 = "I am the boss";
console.log(subString1.substring(0,4)) // returns "I am"  (0 is starting index & 4 is ending index(exclusive))

// 6. removing element from an array
let removeElementExample = [1,2,3,4,5,6,7,8,9,10];
removeElementExample.splice(5, 2); // 5 is the start index(exclusive), 2 is the elements we want to delete. (In this case 2 elements will be deleted after 5 index)
console.log("Remove from specific index example: ",removeElementExample)

// 7. removing first element from an array
let removeFirstElementFromArray = ["aman", "1",21,3,4,5,6];
console.log(removeFirstElementFromArray.shift()) // returns the first element.
console.log("Remove first element example: ",removeFirstElementFromArray); // removes the first element.

// 8. removes the last elemetns
let removeTheLastElement = [1,2,3,3,4,5,6,8,89,0,0];
console.log(removeTheLastElement.pop()); //returs last index i.e. 0
console.log("Remove last element in array example: ", removeTheLastElement)

// 9. combine two list
let combineList1 = [1,2,4];
let combineList2 = [1,3,4];
console.log("Combine list example: ", combineList1.concat(combineList2))

// 10 add empty items to array
let emptyItemsExmaple = [1,2,3,4,]

// 11 index of the substring
const haystack = "axxxsadbutsad";
const needle = "ad";
console.log(haystack.indexOf(needle))

// 12. convert number into an array of numbers
const convertingNumbers = 1234567890;
console.log("Converted numbers into numbers array: ")
console.log(convertingNumbers.toString().split('').map(Number));

// 13. adding two binary numbers
const binaryNumberExample1 = '1001'
const binaryNumberExample2 = '0001';
const addBinaryNumber = (number1, number2)=>{
    const convertedToBinary1 = parseInt(number1, 2);
    const convertedToBinary2 = parseInt(number2, 2);
    const sum = (convertedToBinary1+convertedToBinary2).toString(2);
    return sum;
}
console.log(addBinaryNumber(binaryNumberExample1, binaryNumberExample2));