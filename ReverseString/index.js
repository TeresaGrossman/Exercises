// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//FOR LOOP SOLUTION-
// Make an empty string. 
// Take each character from the original string and stick it into the new one, one at a TimeRanges.
// Because adding one character at a time, the string is reversed.
let reversed = '';

// same as below for (var i = 0; i < str.length; i++){ use this one if more than one 
// }
for (let character of str){
    reversed = character + reversed;
}
return reversed;
}

// //REVERSE HELPER
// //split() method to return a new ARRAY 'arr'
// var arr = str.split("");
// //reverse() method to reverse the letters in the ARRAY
//      arr.reverse("");
// //join() method to rejoin the letters in reverse
//      arr.join("");
// //return the reversed string
//      return arr.join("");

// // cleaned up code 
//     //return str.split("")
//     //.reverse().
//     //join("");


module.exports = reverse;
// 