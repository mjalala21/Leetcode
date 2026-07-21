

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

// 557. Reverse Words in a String III
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function(s) {
//     let arr= s.split(" ")
//     let revarr=arr.map(word=>word.split("").reverse().join(""))
//     return revarr.join(" ")
// };
// ________________________________________________________________
// 520. Detect Capital

// /**
//  * @param {string} word
//  * @return {boolean}
//  */
// var detectCapitalUse = function(word) {
//     if(word === word.toUpperCase() || word===word.toLowerCase() || word[0]===word[0].toUpperCase() && word.slice(1)===word.slice(1).toLowerCase()){
//         return true;
//     } 
//     else{
//         return false
//     }
    

  
// };

// _________________________________________________________________________
// 2154. Keep Multiplying Found Values by Two
// /**
//  * @param {number[]} nums
//  * @param {number} original
//  * @return {number}
//  */
// var findFinalValue = function(nums, original) {
   
//    while(nums.includes(original)){
//         original=original *2
//        }
    
//     return original
    
// };
// ________________________________________________________________________
// 1929. Concatenation of Array

// var getConcatenation = function(nums) {
//     nums2=[...nums]
//     ans=nums.concat(nums2)
//     return ans;
// };

// ___________________________________________________________________
// 3099. Harshad Number
// var sumOfTheDigitsOfHarshadNumber = function(x) {
//     let arr=String(x).split("")
//    let newArr=arr.map(n=>Number(n))
//     let sum =0
//     for(let n of newArr){
//         sum+=n
//     }
//     if(x%sum===0){
//         return sum
//     }
//     else{
//         return -1
//     }
    
// };
// ______________________________________________
// 2180. Count Integers With Even Digit Sum

// var countEven = function(num) {
//     let count=0;
//    for (let i = 1; i <= num; i++) {

//     let arr = String(i).split("");

//     let newArr = arr.map(n => Number(n));

//     let sum = newArr.reduce((sum, n) => sum + n, 0);

//     if (sum % 2 === 0) {
//         count++;
//     }

//     }
//     return count
// }
// ________________________________________
// 977. Squares of a Sorted Array
// var sortedSquares = function(nums) {
//     let res = nums.map(n=>n**2).sort((a,b)=>a-b)
//     return res
// };
// // 136. Single Number
// ______________________________________

// var singleNumber = function(nums) {
//     for(i=0;i<nums.length;i++){
//         count =0;
//         for(j=0; j<nums.length;j++){
//             if(nums[i]===nums[j]){
//                 count++
//             }
//         }
//         if(count===1){
//             return nums[i]
//         }
//         }
//         return
//     }
    