//! 01. Print All Factors of a Number
// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]

function factors(num) {
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

// console.log(factors(24));

//! 02. Print All Multiples of a Number up to N
// Input: Number = 4, Limit = 30
// Output: [4, 8, 12, 16, 20, 24, 28]

function getMultiples(num, limit) {
  const multiples = [];
  for (let i = num; i <= limit; i += num) {
    multiples.push(i);
  }
  return multiples;
}
// console.log(getMultiples(4, 30));
