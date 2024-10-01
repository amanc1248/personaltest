// https://leetcode.com/problems/add-binary/description/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Method 1: This only pass for the small integer, this does not pass for the big integer.
var addBinary = function (a, b) {
    const intConverta = parseInt(a, 2);
    const intConvertb = parseInt(b, 2);
    const sum = (intConverta + intConvertb).toString(2);
    return sum;
};

// Method 2: This pass for both the small integer and big integer as well.
var addBinaryForAll = function (a, b) {
    const convertedA = BigInt(`0b${a}`);
    const convertedB = BigInt(`0b${b}`);
    const sum = (convertedA + convertedB).toString(2);
    return sum;
}

addBinary('11', '1');
addBinaryForAll('11', '1');