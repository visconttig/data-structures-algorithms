/**
 * 
 *      Sorting an array using bubble sort.
 */

const swap = (indexA, indexB, array) => {
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}


function bubbleSort(numbersArray){
    // log array initial order 
    console.log(numbersArray);
    let unsortedUntilIndex = numbersArray.length - 1;
    let sorted = false;
    
    while(!sorted){
        sorted = true;
        for(let i = 0; i < unsortedUntilIndex ; i++){
                if(numbersArray[i] > numbersArray[i + 1]){
                    swap(i, i+1, numbersArray);
                    sorted = false;
                } 
                           
        }
        unsortedUntilIndex -= 1;
    }
    // log ordered array
    console.log(numbersArray);
}



function createRandomArray(arraySize = 3){
let numbersArray = [];
const MAX = arraySize;
const MIN = 0;
    for(let i=0; i < arraySize; i++){
        let randomNumber = (Math.floor(((Math.random()) * MAX - MIN + 1) + MIN));
        numbersArray.push(randomNumber);
    };

    return numbersArray;
}



bubbleSort(createRandomArray(50));