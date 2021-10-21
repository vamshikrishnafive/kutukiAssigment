// Approach: 
// input: [10, 20, 8, 4, 19, 7, 16]
// sorting the array [4, 7, 8, 10, 16, 19, 20]
// slice the array [4, 7, 8] [10, 16, 19, 20]
// merge back [ 4, 10, 7, 16, 8, 19, 20 ]

function treeArrangement(array) {
    let result = []; // to store the element in a zigzag pattern; 
    let sortedArray = array.sort((a, b) => a - b); // sorting the array in increasing order

    let firstIndex = 0; // first index of the array
    let lastIndex = array.length - 1; // last index of the array
    let middleIndex = firstIndex + lastIndex / 2; // calculating the middle index of the array

    // Dividing the array into two parts firstHalf and secondHalf
    let firstHalf = sortedArray.slice(firstIndex, middleIndex);
    let secondHalf = sortedArray.slice(middleIndex, lastIndex);
    console.log(`firstHalf: ${firstHalf}, secondHalf: ${secondHalf}`);

    //merging back the zigzag pattern into the result array.
    firstHalf.forEach((smallNumbers, index) => {
        result.push(smallNumbers);
        result.push(secondHalf[index]);
    });
    return result;
}
console.log(treeArrangement([10, 20, 8, 4, 19, 7, 16]))
