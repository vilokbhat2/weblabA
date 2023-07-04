function countVowels() {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  
  const str = prompt("Enter a string:");
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

const vowelCount = countVowels();
console.log(vowelCount);