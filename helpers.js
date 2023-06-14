/**
 * Build a frequency counter object from an array
 * @param {Array} arr any array
 */

function createFrequencyCounter(arr) {
  let counter = {};

  for (let i = 0; i <= arr.length; i++) {
    let num = arr[i];
    counter[num] = (counter[num] || 0) + 1;
  }
  return counter;
}

/**
 * Find the most common element in the array
 * @param {Array} arr any array
 */

function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  return +mostFrequent;
}

/**
 * Attempt to convert an array of strings to an array of numbers
 * @param {Array} numsAsStrings array of strings
 * @returns {Array|Error} an array or an error object
 */
function convertAndValidateNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let stringToNumber = Number(numsAsStrings[i]);
    // Passing in an invalid number (NaN errors). For instance, /mean?nums=foo,2,3
    if (Number.isNaN(stringToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(stringToNumber);
  }
  return result;
}

// find the mean of a list of numbers
function findMean(nums) {
  sum = 0;
  if (nums.length === 0) return 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  mean = sum / nums.length;

  return mean;
}

function findMedian(nums) {
  // sort numbers in ascending order and get the middle element
  sortedNums = nums.sort((a, b) => a - b);

  // find the index in the middle of the list
  let midIndex = Math.floor(sortedNums.length / 2);
  let median;

  if (sortedNums.length % 2 === 0) {
    median = (sortedNums[midIndex - 1] + sortedNums[midIndex]) / 2;
  } else {
    median = sortedNums[midIndex];
  }

  return median;
}

module.exports = {
  createFrequencyCounter,
  findMean,
  findMedian,
  findMode,
  convertAndValidateNumsArray,
};
