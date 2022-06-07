
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

// console.log(numbersArray);

const searchNumber = (array, number) => {
    let steps = 0;

    for(let i = 0; i < 100; i++){
        steps++;
        console.log(`step: ${steps}`);

        if(array[i] === number){
            console.log(`Total steps: ${steps}`);
            return true;
        }
    }

    console.log(`Total steps: ${steps}`);
    return false;
}


console.log(searchNumber(numbersArray, searchedNumber));