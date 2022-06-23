/**
 * 
 * Ordering an array using insertion sort.
 */

const randomArray = [2, 7, 6, 3, 9, 1, 0];

const orderUsingInsertionSort = (randomArray) => {
    for(let i = 1; i < randomArray.length; i++){
        let tempValue = randomArray[i];
        let comparePosition = i-1;

        while(comparePosition >= 0){
            if(randomArray[comparePosition] > tempValue){
                randomArray[comparePosition + 1] = randomArray[comparePosition];
                comparePosition -= 1;
            } else {
                break;
            }

        }

        randomArray[comparePosition + 1] = tempValue;
    }

    return randomArray;
}

console.log(randomArray);
console.log(orderUsingInsertionSort(randomArray));