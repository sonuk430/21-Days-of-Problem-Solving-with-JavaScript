//! 01. Split Number into Digits
// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
// ✨ Extract each digit mathematically using, and return them in an array. Do not use string operations.

function splitIntoDigit(num) {
  const digit = [];
  while (num > 0) {
    digit.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return digit;
}

// console.log(splitIntoDigit(12345));

//! 02. Remove the Decimal Point Mathematically

// Input: N = 12.34
// Output: 1234
// ✨ Do not use string operations.

function removeDecimal(num) {
  while (!Number.isInteger(num)) {
    num = num * 10;
  }
  return num;
}

// console.log(removeDecimal(125.205));

//! 03. Separate Whole and Fractional Parts of a Number

// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() method.

function separateParts(num) {
  const fractionPart = Number((num % 1).toFixed(10));
  const wholePart = Number((num - fractionPart).toFixed(10));
  return { wholePart, fractionPart };
}

// console.log(separateParts(14.57));
