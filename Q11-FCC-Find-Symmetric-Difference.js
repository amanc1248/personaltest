// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
// Free code camp: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
function sym(...args){
    let symmetricDifference = [];
    for(let i = 0; i<args.length; i++){
        const singleArray = args[i];
        // find symmetric difference between two array at a time
        const firstArrayDifference = symmetricDifference.filter(num=>!singleArray.includes(num));
        const secondArrayDifference = singleArray.filter(num=>!symmetricDifference.includes(num));
        symmetricDifference = firstArrayDifference.concat(secondArrayDifference)
        
        // remove repeated nums
        symmetricDifference = [...new Set(symmetricDifference)];
    };
    console.log(symmetricDifference)
    return symmetricDifference
}
sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 3, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);