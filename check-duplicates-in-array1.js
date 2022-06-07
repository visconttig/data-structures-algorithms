            
const numbers = [1, 2 , 3, 0, 7];

            /*
            * checking for duplicates in array -version 1:
            *            
            * >>>>>>>>>>>>>>      O(N²)                */


const checkDuplicates = (array) => {
    let steps = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            steps++;
            console.log(`step: ${steps}`);

            if(i != j && array[i] === array[j]){  
                console.log(`Total steps: ${steps}`);
                return true;
            } 
        }
    }
    console.log(`Total steps: ${steps}`);
    return false;
}


console.log("checking...");
console.log(checkDuplicates(numbers));