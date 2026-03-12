//! reverse String
// function reverseStr(str) {
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// console.log(reverseStr("abcd"));

//! ### **2️⃣ Check if a String is a Palindrome**

// function isPalindromeStr(str) {
//   let leftIndex = 0;
//   let rightIndex = str.length - 1;

//   while (leftIndex < rightIndex) {
//     if (str[leftIndex] !== str[rightIndex]) return false;
//     leftIndex++;
//     rightIndex--;
//   }
//   return true;
// }

// console.log(isPalindromeStr("aba"));

//! ### **3️⃣ Count Frequency of Each Character**

function countCharFeq(str) {
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
  }

  return frequency;
}

console.log(countCharFeq("apple"));
