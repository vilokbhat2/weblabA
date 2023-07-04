// Define the input string
var inputString = "Albert Einstein was born in Ulm, on 14/03/1879.";

// Regular expression pattern to match a date (dd/mm/yyyy format)
var pattern = /\d{2}\/\d{2}\/\d{4}/;

// Search for the date within the input string
var matchedDate = inputString.match(pattern);

// Display the matched date using alert
if (matchedDate) {
  alert("Date found: " + matchedDate[0]);
} else {
  alert("No date found in the string.");
}
