/**
 * 
 *      Sorting an array using bubble sort.
 */


function bubbleSort(numbersArray){
    // log array initial order 
    console.log(numbersArray);
    let unsortedUntilIndex = numbersArray.length - 1;
    let sorted = false;
    
    while(!sorted){
        sorted = true;
        for(let i = 0; i < unsortedUntilIndex ; i++){
                if(numbersArray[i] > numbersArray[i + 1]){
                    let temp = numbersArray[i];
                    numbersArray[i] = numbersArray[i + 1];
                    numbersArray[i + 1] = temp;
                    sorted = false;
                } 
                           
        }
        unsortedUntilIndex -= 1;
    }
    // log ordered array
    console.log(numbersArray);
}


let numbersArray = [];
const MAX = 100;
const MIN = 0;
function createRandomArray(arraySize = 3){
    for(let i=0; i < arraySize; i++){
        let randomNumber = (Math.floor(((Math.random()) * MAX - MIN + 1) + MIN));
        numbersArray.push(randomNumber);
    };

    return numbersArray;
}



bubbleSort(createRandomArray(100));