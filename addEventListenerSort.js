// Get the necessary elements from the DOM
const inputElement = document.getElementById('inputString');
const sortButton = document.getElementById('sortButton');
const resultElement = document.getElementById('result');

// Add event listener to the button
sortButton.addEventListener('click', function() {
  const inputString = inputElement.value;
  const sortedString = sortLettersAlphabetically(inputString);
  resultElement.textContent = sortedString;
});

// Function to sort the letters in alphabetical order
function sortLettersAlphabetically(str) {
  // Convert the string to an array of characters, sort them, and join back into a string
  return str.split('').sort().join('');
}
