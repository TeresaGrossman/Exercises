// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0; //helper variable that sets the new maximum occurrence
  let maxChar = ""; //helper variable that sets character with new maximum
  //this allows us to count the chars-ITERATE through an ARRAY or STRING 'for/of'
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  //this allows us to count the chars-ITERATE through an OBJECT 'for/in'
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
module.exports = maxChar;

// Determine occurrence of char[object]
// function maxChar(str) {
//     const string = 'Hello There!';
//     const chars = {};

//     for (let char of string) {
//         if (!chars[char]){ //if this character[char object] has not occured make it 1
//         chars[char] = 1;
//         }
//         else chars[char]++;
//     }
// }
// chars;
// module.exports = maxChar;
