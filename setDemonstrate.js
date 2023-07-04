// Create an empty Set
const mySet = new Set();

// Add values to the Set
mySet.add(1);
mySet.add('Hello');
mySet.add(true);

// Check if a value exists in the Set
console.log(mySet.has('Hello')); // Output: true
console.log(mySet.has(2)); // Output: false

// Retrieve values from the Set
console.log(mySet.size); // Output: 3

// Iterate over the Set using for...of loop
for (const item of mySet) {
  console.log(item);
}

// Iterate over the Set using forEach() method
mySet.forEach((item) => {
  console.log(item);
});

// Remove a value from the Set
mySet.delete('Hello');
console.log(mySet.size); // Output: 2

// Clear the entire Set
mySet.clear();
console.log(mySet.size); // Output: 0
