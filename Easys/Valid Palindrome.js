/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    // Make copy of string to avoid mutation 
    let szConvertedInput = 
            s
            .toLowerCase() // Convert characters to lowercase
            .replace(/[^a-zA-Z0-9]/g, ''); // Remove all non-alphanumeric characters from string copy using RegEx
    
    // Intialise array
    let arrReversedSplitInput =
        szConvertedInput
        .split('') // Each element is character from converted string input
        .reverse(); // Reverse the order of the split array's elements
    
    
    // Convert the reversed array back into a string
    let szReversedConvertedInput = arrReversedSplitInput.join('');
    
    // Return comparison of original converted string input and reversed string input
    return (szConvertedInput === szReversedConvertedInput)
};