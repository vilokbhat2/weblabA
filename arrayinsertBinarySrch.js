// Prompt the user to enter elements for the array
var input = prompt("Enter elements for the array (separated by comma):");
var elements = input.split(",").map(function(item) {
  return parseInt(item.trim(), 10);
});

// Sort the array in ascending order
elements.sort(function(a, b) {
  return a - b;
});

// Prompt the user to enter the element to search
var searchElement = parseInt(prompt("Enter the element to search:"), 10);

// Perform binary search on the sorted array
var result = binarySearch(elements, searchElement);

// Display the result
if (result !== -1) {
  console.log("Element found at index", result);
} else {
  console.log("Element not found in the array.");
}

// Binary search function
function binarySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target element
    } else if (arr[mid] < target) {
      left = mid + 1; // Target element is in the right half
    } else {
      right = mid - 1; // Target element is in the left half
    }
  }

  return -1; // Element not found
}
