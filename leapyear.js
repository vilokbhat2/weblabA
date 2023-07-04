// Prompt the user to enter the start and end years
var startYear = parseInt(prompt("Enter the start year:"));
var endYear = parseInt(prompt("Enter the end year:"));

// Function to check if a year is a leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Array to store the leap years
var leapYears = [];

// Iterate over the range of years and check for leap years
for (var year = startYear; year <= endYear; year++) {
  if (isLeapYear(year)) {
    leapYears.push(year);
  }
}

// Display the leap years
if (leapYears.length === 0) {
  console.log("No leap years found in the given range.");
} else {
  console.log("Leap years in the given range:", leapYears);
}
