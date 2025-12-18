//! 01
// Print Right-Angled Star Triangle

// Input: Rows = 5

// Output:

// *
// **
// ***
// ****
// *****

function rightAngleStarTriangle(raw) {
  for (let i = 1; i <= raw; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    console.log(str);
  }
}
// rightAngleStarTriangle(5);

//!2

// Print Inverted Right-Angled Triangle

// Input: Rows = 5

// Output:

// *****
// ****
// ***
// **
// *

function InvertedRightAngleStarTriangle(raw) {
  for (let i = raw; i >= 1; i--) {
    let str = "";

    for (let j = i; j >= 1; j--) {
      str += "*";
    }

    console.log(str);
  }
}

// InvertedRightAngleStarTriangle(3);
