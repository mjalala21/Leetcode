

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
    // ____________________________________________
    // 2677. Chunk Array

//     var chunk = function(arr, size) {
//     let result = [];
//     for(i=0; i<arr.length; i+=size){
//         result.push(arr.slice(i,i+size))
//     }
//     return result
// };
// ___________________________________________

// 2540. Minimum Common Value
// var getCommon = function(nums1, nums2) {
//     let i = 0;
//     let j = 0;

//     while (i < nums1.length && j < nums2.length) {

//         if (nums1[i] === nums2[j]) {
//             return nums1[i];
//         }

//         if (nums1[i] < nums2[j]) {
//             i++;
//         } else {
//             j++;
//         }
//     }

//     return -1;
// };
// var getCommon = function(nums1, nums2) {
//     for(let i=0; i<nums1.length; i++){
//         for(j=0; j<=nums2.length;j++){
//             if(nums1[i]===nums2[j]){
//                 return nums1[i]
//             }
//         }
       
//     }
//     return -1
// };

// ______________________________________________________

// 151. Reverse Words in a String

// var reverseWords = function(s) {
//     let arr = s.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ")
   
//         return arr

// };

// _________________________________________________


// 344. Reverse String

// var reverseString = function(s) {
//     let res=s.reverse()
//     return res
// };

// _______________________________________________________

// 1528. Shuffle String

// var restoreString = function(s, indices) {
//    let result = []
//    for(let i=0; i<s.length; i++){
//     result[indices[i]]= s[i]
//    }
//    return result.join("")
// };

_____________________________________________

// 541. Reverse String II

// var reverseStr = function(s, k) {

//     let arr = s.split("");

//     for (let i = 0; i < arr.length; i += 2 * k) {

//         let left = i;
//         let right = Math.min(i + k - 1, arr.length - 1);

//         while (left < right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }

//     return arr.join("");
// };

// _________________________________________________

// 367. Valid Perfect Square

// var isPerfectSquare = function(num) {
//     if(Number.isInteger(Math.sqrt(num))){
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// ___________________________________________________



// 1672. Richest Customer Wealth

// var maximumWealth = function(accounts) {
//      let wealthArr = []
//   for(let i = 0; i<accounts.length; i++){
//       let sum = 0
     
//       for(let j =0; j<accounts[i].length; j++){
//          sum+=accounts[i][j]
//       }
//       wealthArr.push(sum)
//   }
//   let greatest = wealthArr[0]
//   for(let i = 1; i<wealthArr.length ; i++){
//      if(wealthArr[i]>greatest){
//         greatest = wealthArr[i]
//      }
//   }

//   return greatest
   
// };

// ____________________________________

