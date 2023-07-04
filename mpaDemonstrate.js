// Create an empty Map
const myMap = new Map();

// Add key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Retrieve values from the Map using keys
console.log(myMap.get('name')); // Output: John
console.log(myMap.get('age')); // Output: 30
console.log(myMap.get('city')); // Output: New York

// Check if a key exists in the Map
console.log(myMap.has('name')); // Output: true
console.log(myMap.has('gender')); // Output: false

// Iterate over the Map using for...of loop
for (const [key, value] of myMap) {
  console.log(key, value);
}

// Iterate over the Map using forEach() method
myMap.forEach((value, key) => {
  console.log(key, value);
});

// Remove a key-value pair from the Map
myMap.delete('age');
console.log(myMap.size); // Output: 2

// Clear the entire Map
myMap.clear();
console.log(myMap.size); // Output: 0
