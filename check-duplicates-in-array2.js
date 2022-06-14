/*
* Checking duplicates in array -version 2:

* We are going to write a 1 into the array using the found number as index.
*
*    >>>>>>>>>>>>>       O(N)             
*/

const numbers = [2, 5, 7, 9, 0, 0, 3];

const checkDuplitactesInArray = (array) => {
    let foundNumbers = [];
    for(let i = 0; i < array.length; i++){
        if(foundNumbers[array[i]] === 1){  // if there is a number 1, this number was already found*
            return true;  // contains duplicates**
        }

        foundNumbers[array[i]] = 1;
    }

    return false;
}


console.log(checkDuplitactesInArray(numbers));