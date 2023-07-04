function jumpSearch(arr, key) {
    const n = arr.length;
    const jumpSize = Math.floor(Math.sqrt(n));
  
    let left = 0;
    let right = jumpSize;
  
    while (right < n && arr[right] <= key) {
      left = right;
      right += jumpSize;
      if (right > n - 1) {
        right = n;
      }
    }
  
    for (let i = left; i < right; i++) {
      if (arr[i] === key) {
        return i;
      }
    }
  
    return -1;
  }
  
  const key = parseInt(prompt("Enter the key:"));
  const numList = prompt("Enter a list of numbers separated by spaces:")
                    .trim()
                    .split(" ")
                    .map(num => parseInt(num));
  
  const index = jumpSearch(numList, key);
  
  if (index === -1) {
    console.log(`Search failed. Key ${key} not found.`);
  } else {
    console.log(`Search successful. Key ${key} found at index ${index}.`);
  }
  