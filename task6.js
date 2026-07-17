

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4



// var searchInsert = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]>=target){
//         return i 
//         }
        
//    }
//    return nums.length
//     } 

// console.log(searchInsert([1,3,5,6,7,8,9,10],12))

// ------------------------------------------

// 3658. GCD of Odd and Even Sums
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:

// sumOdd: the sum of the smallest n positive odd numbers.

// sumEven: the sum of the smallest n positive even numbers.

// Return the GCD of sumOdd and sumEven.

 

// Example 1:

// Input: n = 4

// Output: 4

// Explanation:

// Sum of the first 4 odd numbers sumOdd = 1 + 3 + 5 + 7 = 16
// Sum of the first 4 even numbers sumEven = 2 + 4 + 6 + 8 = 20
// Hence, GCD(sumOdd, sumEven) = GCD(16, 20) = 4.

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var gcdOfOddEvenSums = function(n) {
//     return n
// };


// -------------------------------------------------