// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

let total=0;
let highestSum=0;
let lowestSum=0;
let highestValue= arr[0];
let lowestValue = arr[0];
for (let i=0; i< arr.length; i++){
  total += arr[i];
  if (arr[i] > highestValue){
    highestValue = arr[i]    
  } 
  if (arr[i] < lowestValue){
    lowestValue = arr[i];
  }
}
highestSum = total - lowestValue; 
lowestSum = total - highestValue; 

console.log(`${lowestSum} ${highestSum}`)
}
arr = [10,20,20,20,20]
 miniMaxSum(arr)

// iterate thru arr 
// one iteration to find max and min values
// all all values together 
// find the min and max
// subtract and the min and max to get the low and high 

// 80 is highest
// 70 is lowest 

// given an input of 5 integers
// take 4 of five and add them to get the max 
// take 4 of five and add them to get the minimum. 
// print on the screen the min and max

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// For example, . Our minimum sum is  and our maximum sum is . We would print

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// Our initial numbers are , , , , and . We can calculate the following sums using four of the five integers:

// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// Hints: Beware of integer overflow! Use 64-bit Integer.

// Need help to get started? Try the Solve Me First problem