// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//SLICE METHOD letters.slice(0, 3); makes a copy of each letter from ZERO to TWO, NOT the third one
function chunk(array, size) {
 const chunked = [];
 let index = 0;
 //use a while loop to run as long as less than array length
 while (index < array.length){
     chunked.push(array.slice(index, index + size)); 
     index += size;
     //array.slice produces an array that contains some number of
     //elements(index, index + size ) from the original array and puts them into the 'chunked' array
     //above using the push method.
 }
 return chunked;
}

module.exports = chunk;

// First soln - iterate throught the entire array
//  function chunk(array, size) {
//     const chunked = [];
    
//     for (let element of array){
//         const last = chunked[chunked.length - 1];
    
//         if (!last || last.length === size){
//             chunked.push([element]);
//         } else{
//             last.push(element);
//         }
//     }
//     return chunked;
//     }