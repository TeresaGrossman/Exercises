// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Helper convert number to a string .toString()
//Helper convert string to a number/integer .parseInt() - Needs to be at front with everything in ()
//Helper ensure sign is the same - Math.sign(x)

function reverseInt(n) {
    //Convert integer to a string and then reverse
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
//Make sure the 'negative' is passed through if needed
//or use math.sign instead of if statement
if (n < 0) {
    return parseInt(reversed) * -1;
}
//Turn string back into an integer
    return parseInt(reversed);
}

module.exports = reverseInt;
