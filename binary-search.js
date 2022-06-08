/*
* Binary search in ordered array.
*/

// create a test array
const testArray = [];
for(let i = 0; i < 100; i++){
    testArray[i] = i+1;
}

let lowerBound = 0 // the initial index in the array
let upperBound = testArray.length - 1; // the last index in the array
let steps = 0;

const binarySearchItem = (searchedItem) => {
    while( lowerBound <= upperBound ) {
        let middle = Math.floor((lowerBound + upperBound ) / 2);
        console.log(`middle: ${middle}`);
        steps++;
        console.log(`Step: ${steps}`);
        if(testArray[middle] === searchedItem ) {
            console.log(`Item found in index ${middle}.`);
            return true;
        } else if( searchedItem < testArray[middle]) {
            upperBound = middle - 1;
        } else {
            lowerBound = middle + 1;
        }
    }

    console.log("The item was not found.");
    return false;  // item is not in the array
}


binarySearchItem(101);