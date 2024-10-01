/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//     const mergedList = list1.concat(list2).sort();
//     return mergedList;
// };
var mergeTwoLists = function(list1, list2) {
    const finalList = list1;
    for(let i = 0; i<list2.length; i++){
        finalList.push(list2[i]);
    }
    // finalList.sort();
    // Arrange in ascending order
    for(let i = 0; i<finalList.length; i++){
        if(finalList[i]>finalList[i+1]){
            const temp = finalList[i];
            finalList[i] = finalList[i+1];
            finalList[i+1] = temp;
        }
    }
    return finalList;
};
mergeTwoLists([1,2,4], [1,3,4]);