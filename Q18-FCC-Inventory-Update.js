// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
function updateInventory(arr1, arr2) {
    const updatedArray = [];
    // arr1 = arr1.sort();
    // console.log(arr1);
    // Steps
    // Description: so we have two different arrays
    // and we need to merge both to show all the elements of the both side, and if the elements are same on the both side then combine both.

    // 1. check if element of arry 1 exists in arr2
    // 2. check if element of array 2 exists in arr1
    for (let item of arr1) {
        const [quantity, name] = item;
        const foundItem = arr2.find(item => item[1] === name);
        if (foundItem) {
            updatedArray.push([quantity + foundItem[0], name]);
        } else {
            updatedArray.push([quantity, name]);
        }
    }

    for (let item of arr2) {
        const [quantity, name] = item;
        const foundItem = arr1.find(item => item[1] === name);
        if (!foundItem) {
            updatedArray.push([quantity, name]);
        }
    }
    updatedArray.sort(function (a, b) {
        // 
        // this means current is smaller than next. place a before b
        if (a[1] < b[1]) {
            return -1;
        }

        // this means current is greater than next. Place a after b.
        if (a[1] > b[1]) {
            return 1;
        }

        // if both are same then do nothing. Their position remains unchanged.
        return 0;
    });
    return updatedArray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));