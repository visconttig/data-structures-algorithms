
/*
*
* We are going to search for a number in an array using
* linear search.
*
* >>>>>>>>>>>  O(N)
*/

let searchedNumber = 101;
let numbersArray = [];


for(let i = 0; i < 100; i++){
    numbersArray[i] = i+1;
}

const searchNumber = (array, number) => {

    for(let i = 0; i < 100; i++){
        if(array[i] === number){
            return true;
        }
    }
    return false;
}


console.log(searchNumber(numbersArray, searchedNumber));