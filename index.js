// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//split() method to return a new array 'arr'
     var arr = str.split("");
//reverse() method to reverse the letters in the string
     arr.reverse("");
//join() method to rejoin the letters in reverse
     arr.join("");
//return the reversed string
     return arr.join("");

// cleaned up code return str.split("").reverse().join("");
}

module.exports = reverse;
// 