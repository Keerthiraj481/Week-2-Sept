"use script";

// 1. Write a function that determines whether a given string is a valid JSON or not.
console.log(`Problem No. : 1`);
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (err) {
    return false;
  }
}
console.log(isValidJSON('{"name":"John","age":30}'));
console.log(isValidJSON('{"name": "John","age": 30,}'));
console.log(isValidJSON('{"name":"John","age":30}'));
console.log(isValidJSON(`{"name": "John","age": 30,"city":"New York"}`));

console.log(`<-------------------------------->`);

// 2. Write a function that finds the longest increasing subarray within an array of numbers.

console.log(`Problem No. : 2`);
function longestSubarray(list) {
  let subArr = [],
    max = 1,
    len = 1,
    checkFirstNum = false;
  let arr = [];

  for (let i = 1; i < list.length; i++) {
    if (list[0] < list[i]) {
      checkFirstNum = true;
    }
  }
  if (!checkFirstNum) {
    arr.push(list[0]);
    return arr;
  }

  function updateArr(arr1) {
    arr = arr1;
  }

  function logic() {
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] < list[i + 1]) {
        subArr.push(list[i]);
        len++;
        if (i + 1 == list.length - 1) {
          subArr.push(list[i + 1]);
        }
        if (len > max) {
          max = len;
          updateArr(subArr);
        }
      } else if (list[i] > list[i + 1]) {
        subArr.push(list[i]);
        if (len >= max) {
          max = len;
          updateArr(subArr);
        }
        len = 1;
        subArr = [];
      }
    }
  }
  logic();
  return arr;
}

console.log(longestSubarray([1, 2, 3, 1, 2, 3, 4, 5]));
console.log(longestSubarray([5, 4, 3, 2, 1]));
console.log(longestSubarray([1, 2, 3, 4, 3, 2, 1]));
console.log(`<-------------------------------->`);

//  3. Implement a function that performs a deep comparison between two objects to check if they are equal.

console.log(`Problem No. : 3`);
console.log(`<-------------------------------->`);


// 4. Implement a function to calculate the factorial of a given non-negative integer using recursion.

console.log(`Problem No. : 4`);
function fact(n) {
  if (n >= 1) {
    return n * fact(n - 1);
  } else if (n == 0) {
    return 1;
  }
}
console.log(fact(0));
console.log(fact(5));
console.log(fact(10));
console.log(`<-------------------------------->`);

// 5. Write a function that finds all pairs of elements in an array that add up to a specific target sum.

console.log(`Problem No. : 5`);
function findPairsOfSum(arr, targetSum) {
  let arrPair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] == targetSum) {
        arrPair.push([arr[i], arr[j]]);
      }
    }
  }
  return arrPair;
}
console.log(findPairsOfSum([1, 2, 3, 4, 5], 7));
console.log(findPairsOfSum([1, 2, 3, 4, 5], 10));
console.log(findPairsOfSum([3, 4, 2, 1, 5], 8));
console.log(`<-------------------------------->`);

//  6. Create a function that finds the largest common prefix among an array of strings.

console.log(`Problem No. : 6`);
function commonPrefix(strings) {
  let str = strings[0],
    finalStr = "";
  for (let i = 0; i < str.length; i++) {
    let flag = true;
    for (let j = 1; j < strings.length; j++) {
      if (str[i] !== strings[j][i]) {
        flag = false;
      }
    }
    if (!flag) {
      finalStr += "";
      break;
    } else {
      finalStr += str[i];
    }
  }
  return finalStr;
}
console.log(commonPrefix(["flower", "flow", "flight"]));
console.log(commonPrefix(["dog", "car", "race"]));
console.log(commonPrefix(["apple", "app", "apricot"]));
console.log(`<-------------------------------->`);

// 7.Create a function to find the nth prime number.

console.log(`Problem No. : 7`);
function primeNum(n) {
  let num = 2,
    count = 0,
    primeNo;
  if (n >= 2) {
    while (n > count) {
      let primeCount = 0;
      for (let i = 1; i <= 10; i++) {
        if (num % i === 0) {
          primeCount++;
        }
        if (primeCount > 2) {
          break;
        }
      }
      if (num <= 10) {
        if (primeCount === 2) {
          count++;
          primeNo = num;
        }
      } else if (num > 10) {
        if (primeCount === 1) {
          count++;
          primeNo = num;
        }
      }
      num++;
    }
  } else if (n == 1) {
    return 2;
  }
  return primeNo;
}
console.log(primeNum(1));
console.log(primeNum(5));
console.log(primeNum(10));
console.log(`<-------------------------------->`);

// 8. Implement a function that sorts an array of objects by a specific property in ascending order.

console.log(`Problem No. : 8`);
function sortProp(arr, prop) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][prop] > arr[j][prop]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
console.log(sortProp(people, "age"));
console.log(`<-------------------------------->`);

// 9. Write a function that performs a deep merge of two objects, combining their properties.

console.log(`Problem No. : 9`);
function deepMerge(obj1, obj2) 
{
  return { ...obj1, ...obj2 };
}
const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { b: 4, d: 5 }, e: 6 };
console.log(deepMerge(obj1, obj2));
console.log(`<-------------------------------->`);


// 10. Create a function that performs a binary search on a sorted array and returns the index of the target element.

console.log(`Problem No. : 10`);
function binSearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let center = Math.floor((start + end) / 2);
    if (arr[center] === target) {
      return center;
    } else if (target > arr[center]) {
      start = center + 1;
    } else if (target <= arr[center]) {
      end = center - 1;
    }
  }
  return -1;
}
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
console.log(binSearch(sortedArray, 7));
console.log(binSearch(sortedArray, 2));
console.log(`<-------------------------------->`);
