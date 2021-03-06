// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//word.replace(/[^\w]/g, "")  replace spaces and punctuation with NO SPACE
// add .toLowerCase(); at the end of the ) to change everything to lower case

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }
//use for loop to iterate over either charMap and since Object us 'IN'
for (let char in aCharMap){
    if (aCharMap[char] !== bCharMap[char]){
        return false;
    }
}
return true;
}
    //helper function to build character map(object) for both strings.
function buildCharMap (str){
    const charMap = {}; //empty object

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
charMap[char] = charMap[char] +1 || 1;
    }

return charMap;
}

module.exports = anagrams;
