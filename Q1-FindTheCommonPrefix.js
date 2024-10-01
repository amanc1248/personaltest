/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const firstElementSplitted = strs[0].split("");
    let commonPrefix = '';
    for (let i = 0; i < firstElementSplitted.length; i++) {
        let elem = commonPrefix !== '' ? commonPrefix + firstElementSplitted[i] : firstElementSplitted[i];
        let includesOnAll = true;
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].substring(0, i + 1).includes(elem)) {
                continue;
            }
            includesOnAll = false;
            break;
        }
        if (includesOnAll) {
            commonPrefix = elem;
            continue;
        }
        break;
    }
    return commonPrefix;
};


// Most efficient version for finding the longest common prefix
var longestCommonPrefixImprovised = function (s) {
    if (s.length === 0) return "";
    let prefix = s[0];
    for (let word of s) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
        if (prefix === "") return "";
    }
    return prefix
};