// JavaScript Fundamentals

// Task 2: 
const nums = [1, 2, 3, 4, 5];
const calcSumAndAvg = (numsArr) => {
    let sum = numsArr.reduce((acc, curr) => acc + curr, 0);
    let avg = sum / numsArr.length;
    return `Total Sum: ${sum}\nAverage: ${avg}`;
}
console.log(nums);
console.log(calcSumAndAvg(nums)); // Total Sum: 15 Average: 3


// Task 3
// Way 1: using Set a built-in JavaScript object that automatically eliminates duplicate values - for a better constant time complexity O(n)
const names = ["Moha", "Saadi", "Lamar", "Ahmad", "Moha", "Lamar", "Sarah", "Saadi"];
const removeDuplicate = (strArr) => {
    const uniqueArr = new Set(strArr);
    console.log("The array with unique values:");
    return Array.from(uniqueArr);
}
console.log(names);
console.log(removeDuplicate(names)); // The array with unique values: ['Moha', 'Saadi', 'Lamar', 'Ahmad', 'Sarah']

// Way 2: using filter method O(n^2)
// const names = ["Moha", "Saadi", "Lamar", "Ahmad", "Moha", "Lamar", "Sarah", "Saadi"];
// const removeDuplicate = (strArr) => {
//     const uniqueArr = strArr.filter((item, index) => strArr.indexOf(item) === index);
//     return uniqueArr;
// }
// console.log(names);
// console.log(removeDuplicate(names));