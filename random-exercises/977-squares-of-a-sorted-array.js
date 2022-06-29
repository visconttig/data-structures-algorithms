/**
 * 977. Squares of a Sorted Array
 * 

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.

 */



/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let squared = [];
    for(let i=0; i<nums.length; i++){
        squared.push(nums[i]*nums[i]);
    }
    
    // ordering array
    let key;
    let j;
    for(let i=1; i<squared.length; i++){
        key = squared[i];
        j = i - 1;
        while(j >= 0 && squared[j] > key){
            squared[j + 1] = squared[j];
            j = j - 1;
        }
        
        squared[j + 1] = key;
    }
    
    return squared;
};