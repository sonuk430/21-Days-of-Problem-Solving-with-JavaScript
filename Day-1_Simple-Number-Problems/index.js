//! 01
// Print Numbers from 1 to N

// Input: 5
// Output: 1 2 3 4 5

// function printNum(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// }
// printNum(5);

//! 02

// Print Numbers from N to 1 without changing the loop condition of above question

// Input: 5
// Output: 5 4 3 2 1

// function printRevNum(num) {
//   for (let i = num; i >= 1; i--) {
//     console.log(i);
//   }
// }
// printRevNum(5);

//! 03

// Sum of First N Natural Numbers

// Input: 5  // 1+2+3+4+5
// Output: 15

// function sumOfNatural(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }

// sumOfNatural(5);

//! 04
// Print All Even Numbers from 1 to N

// Input: 10
// Output: 2 4 6 8 10

// function evenNum(num) {
//   for (let i = 2; i <= num; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// evenNum(10);

//! 05
// Product (Factorial) of N

// Input: 5 // 1*2*3*4*5
// Output: 120

// function factorial(num) {
//   let fac = 1;
//   for (let i = 2; i <= num; i++) {
//     fac *= i;
//   }
//   console.log(fac);
// }
// factorial(5);

//! 06
// Sum of All Even Numbers up to N

// Input: 10
// Output: 30 (2+4+6+8+10)

// function sumOfEven(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }

// sumOfEven(10);

//! 07
// Print Squares of Numbers from 1 to N

// Input: 5
// Output: 1 4 9 16 25

// function squaresOfNum(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i * i);
//   }
// }

// squaresOfNum(5);

//! 08
// Print all numbers divisible by 3 and 5 up to N

// Input: 30
// Output: 15 30

// function divBy(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// divBy(30);

//! 09
// Find the sum of all odd numbers up to N

// Input: 10
// Output: 25 (1 + 3 + 5 + 7 + 9)

// function odd(num) {
//   let odSum = 0;
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 !== 0) {
//       odSum += i;
//     }
//   }
//   console.log(odSum);
// }

// odd(10);

//! 10
// Print the cubes of numbers from 1 to N

// Input: 5
// Output: 1 8 27 64 125

// function cubeOfNum(num) {
//   for (let i = 0; i <= num; i++) {
//     console.log(i * i * i);
//   }
// }
// cubeOfNum(5);

//! 11
// Print only the numbers that are both even and perfect squares

// Input: 1 to 20
// Output: 4 16

// function evenSq(num) {
//   for (let i = 1; i <= num; i++) {
//     const squares = Math.sqrt(i);
//     if (i % 2 === 0 && squares % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// evenSq(20);
